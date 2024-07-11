import {render, setupIntlBasics} from "@/test/util";
import {useMantineColorScheme} from "@mantine/core";
import {fireEvent, waitFor} from "@testing-library/dom";
import ScrollMock from "@/test/mock/ScrollMock";
import {mockRouterPush, setDashboardAccess, setLoading} from "@/test/mocks";
import Sidebar from "@/layout/dashboard/components/sidebar/Sidebar";
import {setupSidebarMockValues} from "@/layout/dashboard/components/sidebar/partial/Sidebar.test-util";
import {getUser, signOut} from "@/provider/appwrite.provider";

jest.mock("framer-motion", () => ({
    motion: {
        aside: "aside",
    },
}));

jest.mock("@mantine/core", () => ({
    ...jest.requireActual("@mantine/core"),
    useMantineColorScheme: jest.fn(),
    ScrollArea: ({ children, ...props }: any) => <ScrollMock {...props}>{children}</ScrollMock>,
}));

jest.mock("@/provider/appwrite.provider", () => ({
    getUser: jest.fn(),
    signOut: jest.fn(),
}));


describe("Sidebar", () => {

    const mockGetUser = getUser as jest.Mock;
    const mockSetColorScheme = jest.fn();
    const mockUseMantineColorScheme = useMantineColorScheme as jest.Mock;
    const mockSignOut = signOut as jest.Mock;
    const mockToggleResponsive = jest.fn();

    beforeEach(() => {
        setupSidebarMockValues(true);
        setupIntlBasics("/dashboard");
        mockGetUser.mockReturnValue({
            name: "John Doe",
            organizations: ["Company"],
            image: "img/avatar-holder.webp",
        });
        mockUseMantineColorScheme.mockReturnValue({
            colorScheme: "light",
            setColorScheme: mockSetColorScheme,
        });
        mockSignOut.mockResolvedValue({});
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render correctly", async () => {
        const { getByTestId } = render(<Sidebar />);

        // Assert sidebar components are rendered
        await waitFor(() => {
            expect(getByTestId("sidebar-profile-name")).toHaveTextContent("John Doe");
            expect(getByTestId("sidebar-responsive-close")).toBeInTheDocument();
        });
    });

    it("should call toggleResponsive on button click when canCollapse is false", () => {
        setupSidebarMockValues(false, true, mockToggleResponsive);

        const { getByTestId } = render(<Sidebar />);
        const closeButton = getByTestId("sidebar-responsive-close");

        fireEvent.click(closeButton);

        expect(mockToggleResponsive).toHaveBeenCalled();
    });

    it("should call signOut on logout", async () => {
        const { getByTestId } = render(<Sidebar />);
        const logoutButton = getByTestId("sidebar-logout");

        fireEvent.click(logoutButton);

        await waitFor(() => {
            expect(mockSignOut).toHaveBeenCalled();
            expect(mockRouterPush).toHaveBeenCalledWith("/auth/login");
        });
    });

    it("should render responsive close when SidebarContext is responsive", () => {
        setupSidebarMockValues(false, true); // Simulate responsive mode

        const { getByTestId } = render(<Sidebar />);
        const closeButton = getByTestId("sidebar-logout");

        expect(closeButton).toBeInTheDocument();
    });

    it("should set loading state when starting sign out", async () => {
        const { getByTestId } = render(<Sidebar />);
        const logoutButton = getByTestId("sidebar-logout");
        fireEvent.click(logoutButton);
        await waitFor(() => {
            expect(setLoading).toHaveBeenCalledWith(true);
            expect(setDashboardAccess).toHaveBeenCalledWith(false);
            expect(setLoading).toHaveBeenCalledWith(false);
        });
    });

});
