import {render} from "@testing-library/react";
import {LayoutProvider, useLayout} from "@/context/layout/LayoutContext";
import {setupIntlBasics} from "@/common/test/util";
import {getUser, redeemAccountSession} from "@/provider/appwrite.provider";
import {waitFor} from "@testing-library/dom";
import {useRouter} from "@/middleware";
import {getLogger} from "@/provider/logging.provider";
import {useTranslations} from "next-intl";
import {session} from "@/common/config/translation";
import {notifications} from "@mantine/notifications";

// --- Error logger --- //
const mockLogger: any = {
    error: jest.fn(),
};

jest.mock("@/provider/logging.provider", () => ({
    getLogger: jest.fn(() => mockLogger),
}));

// --- Appwrite --- //
jest.mock("@/provider/appwrite.provider", () => ({
    getUser: jest.fn(),
    redeemAccountSession: jest.fn()
}));

// --- Mantine Notifications --- //
jest.mock("@mantine/notifications", () => ({
    notifications: {
        show: jest.fn(),
    },
}));

describe("LayoutContext", () => {

    beforeEach(() => {
        setupIntlBasics("/test");
    });

    const TestComponent = () => {
        const { loading, dashboardAccess } = useLayout();
        return (
            <div>
                <p data-testid="test-layout-loading">{loading.toString()}</p>
                <p data-testid="test-layout-access">{dashboardAccess.toString()}</p>
            </div>
        );
    };

    it("should set dashboardAccess to true if getUser is successful", async () => {
        (getUser as jest.Mock).mockResolvedValueOnce({});

        const { queryByTestId } = render(
            <LayoutProvider>
                <TestComponent />
            </LayoutProvider>
        );

        await waitFor(() => {
            expect(queryByTestId("test-layout-loading")).toHaveTextContent("true");
            expect(queryByTestId("test-layout-access")).toHaveTextContent("true");
        });

        expect(getUser).toHaveBeenCalled();
    });

    it("should call redeemAccountSession if getUser fails and query params are present", async () => {
        (getUser as jest.Mock).mockRejectedValueOnce(new Error("User not logged in"));
        (redeemAccountSession as jest.Mock).mockResolvedValueOnce({});

        Object.defineProperty(window, "location", {
            value: {
                search: "?secret=testSecret&userId=testUserId"
            }
        });

        const { queryByTestId } = render(
            <LayoutProvider>
                <TestComponent />
            </LayoutProvider>
        );

        await waitFor(() => {
            expect(queryByTestId("test-layout-loading")).toHaveTextContent("false");
            expect(queryByTestId("test-layout-access")).toHaveTextContent("true");
        });

        expect(redeemAccountSession).toHaveBeenCalledWith("testUserId", "testSecret");
    });

    it("should redirect to login if getUser fails and no query params are present", async () => {
        (getUser as jest.Mock).mockRejectedValueOnce(new Error("User not logged in"));

        const mockPush = jest.fn();
        (useRouter as jest.Mock).mockReturnValueOnce({
            push: mockPush
        });

        Object.defineProperty(window, "location", {
            value: {
                search: ""
            }
        });

        const { queryByTestId } = render(
            <LayoutProvider>
                <TestComponent />
            </LayoutProvider>
        );

        await waitFor(() => {
            expect(queryByTestId("test-layout-loading")).toHaveTextContent("false");
            expect(queryByTestId("test-layout-access")).toHaveTextContent("false");
        });

        expect(mockPush).toHaveBeenCalledWith("/auth/login");
    });

    it("should log an error and show notification when failed to redeem session", async () => {

        (getUser as jest.Mock).mockRejectedValueOnce(new Error("User not logged in"));
        const mockError = new Error("Failed to redeem session");
        (redeemAccountSession as jest.Mock).mockRejectedValueOnce(mockError);

        Object.defineProperty(window, "location", {
            value: {
                search: "?secret=testSecret&userId=testUserId"
            }
        });

        const { queryByTestId } = render(
            <LayoutProvider>
                <TestComponent />
            </LayoutProvider>
        );

        await waitFor(() => {
            expect(queryByTestId("test-layout-loading")).toHaveTextContent("true");
            expect(queryByTestId("test-layout-access")).toHaveTextContent("false");
        });

        const logger = getLogger();
        expect(logger.error).toHaveBeenCalledWith(mockError, "Error redeeming session:");

        const t = useTranslations();
        expect(notifications.show).toHaveBeenCalledWith({
            color: "red",
            title: t(session.redeemError.title),
            message: t(session.redeemError.message)
        });
    });

});