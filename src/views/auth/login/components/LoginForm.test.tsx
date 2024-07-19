import {act, fireEvent, screen, waitFor} from "@testing-library/react";
import {signIn} from "@/provider/appwrite.provider";
import {showFormNotification} from "@/views/auth/login/helper/login-notification.helper";
import {render, setupIntlBasics} from "@/common/test/util";
import LoginForm from "@/views/auth/login/components/LoginForm";

// Mocking necessary imports
jest.mock("@/provider/appwrite.provider", () => ({
    signIn: jest.fn(),
}));

jest.mock("@/views/auth/login/helper/login-notification.helper", () => ({
    showFormNotification: jest.fn(),
}));

const mockLogger: any = {
    error: jest.fn(),
};

jest.mock("@/provider/logging.provider", () => ({
    getLogger: jest.fn(() => mockLogger),
}));

describe("LoginForm Component", () => {

    beforeEach(() => {
        jest.clearAllMocks();
        setupIntlBasics("/sidebar");
    });

    const renderWithLoginFill = (options: any) => {
        render(<LoginForm />);
        const emailInput = screen.getByLabelText("auth.label");
        const submitButton = screen.getByRole("button");
        act(() => {
            fireEvent.change(emailInput, options);
            fireEvent.click(submitButton);
        });
    };

    it("should render without crashing", () => {
        render(<LoginForm />);
        expect(screen.getByLabelText("auth.label")).toBeInTheDocument();
    });

    it("should receive the correct values from form", async () => {
        renderWithLoginFill({ target: { value: "test@example.com" } });
        await waitFor(() => {
            expect(signIn).toHaveBeenCalledWith("test@example.com");
        });
    });

    it("should show validation errors when present", async () => {
        renderWithLoginFill({ target: { value: "invalid-email" } });
        await waitFor(() => {
            expect(screen.getByText("auth.invalid")).toBeInTheDocument();
        });
    });

    it("should set loading after form submit and remove loading after finally block", async () => {
        (signIn as jest.Mock).mockResolvedValueOnce({});
        renderWithLoginFill({ target: { value: "test@example.com" } });
        const submitButton = screen.getByRole("button");

        await waitFor(() => {
            expect(submitButton).toHaveAttribute("data-loading", "true");
        });

        await waitFor(() => {
            expect(submitButton).toHaveAttribute("data-loading", "false");
        });
    });

    it("should call sign in when form is sent correctly, send notification and mark state as sent", async () => {
        (signIn as jest.Mock).mockResolvedValueOnce({});
        renderWithLoginFill({ target: { value: "test@example.com" } });
        const submitButton = screen.getByRole("button");

        await waitFor(() => {
            expect(signIn).toHaveBeenCalledWith("test@example.com");
            expect(showFormNotification).toHaveBeenCalledWith(expect.objectContaining({ success: true }));
            expect(submitButton).toHaveAttribute("disabled");
            expect(screen.getByText("auth.check")).toBeInTheDocument();
        });
    });

    it("should log error and show error notification when signIn error is present", async () => {
        const error = new Error("Sign in error");
        (signIn as jest.Mock).mockRejectedValueOnce(error);
        renderWithLoginFill({ target: { value: "test@example.com" } });

        await waitFor(() => {
            expect(mockLogger.error).toHaveBeenCalledWith(
                error,
                "Error while sending magic token"
            );
            expect(showFormNotification).toHaveBeenCalledWith(
                expect.objectContaining({ success: false })
            );
        });
    });

    it("should set 30s interval after sent and clear resend after interval executed", async () => {
        jest.useFakeTimers();
        (signIn as jest.Mock).mockResolvedValueOnce({});

        renderWithLoginFill({ target: { value: "test@example.com" } });

        await waitFor(() => {
            expect(screen.getByText("auth.check")).toBeInTheDocument();
        });

        act(() => {
            jest.advanceTimersByTime(30000);
        });

        await waitFor(() => {
            expect(screen.getByText("auth.help")).toBeInTheDocument();
        });

        act(() => {
            jest.useRealTimers();
        });

    });

    it("should display correct badge matching interval and hide when not present", async () => {
        jest.useFakeTimers();
        (signIn as jest.Mock).mockResolvedValueOnce({});

        renderWithLoginFill({ target: { value: "test@example.com" } });

        await waitFor(() => {
            expect(screen.getByText("auth.check")).toBeInTheDocument();
            expect(screen.getByText("(30s)")).toBeInTheDocument();
        });

        act(() => {
            jest.advanceTimersByTime(10000);
        });

        await waitFor(() => {
            expect(screen.getByText("(20s)")).toBeInTheDocument();
        });

        act(() => {
            jest.advanceTimersByTime(20000);
        });

        await waitFor(() => {
            expect(screen.queryByText(/\(\d+s\)/)).not.toBeInTheDocument();
        });

        act(() => {
            jest.useRealTimers();
        });

    });

});
