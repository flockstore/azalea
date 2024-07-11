import LayoutOrchestrator from "@/layout/orchestrator/LayoutOrchestrator";
import {render} from "@/test/util";
import {useLayout} from "@/context/layout/LayoutContext";

jest.mock("@/layout/login/LoginLayout", () => {
    // @ts-ignore
    // eslint-disable-next-line react/display-name
    return ({children}) => <div data-testid="login-layout">{children}</div>;
});

jest.mock("@/layout/dashboard/DashboardLayout", () => {
    // @ts-ignore
    // eslint-disable-next-line react/display-name
    return ({children}) => <div data-testid="dashboard-layout">{children}</div>;
});

jest.mock("@/context/layout/LayoutContext", () => ({
    useLayout: jest.fn()
}));

/**
 * Setup mock layout context values.
 * @param loading to set as loading.
 * @param dashboardAccess to grant dashboard access.
 */
const setupLayoutValues = (loading: boolean, dashboardAccess: boolean) => {
    const mockUseLayout = useLayout as jest.Mock;
    mockUseLayout.mockReturnValue({
        loading,
        dashboardAccess,
        setLoading: jest.fn(),
        setDashboardAccess: jest.fn()
    });
};

describe("LayoutOrchestrator Component", () => {

    it("should render correctly", () => {
        setupLayoutValues(false, false);
        const { getByTestId } = render(<LayoutOrchestrator>
            <div data-testid="test-content">test content</div>
        </LayoutOrchestrator>);
        expect(getByTestId("test-content")).toBeInTheDocument();
        expect(getByTestId("login-layout")).toBeInTheDocument();
    });

    it("should render dashboard when granted", () => {
        setupLayoutValues(false, true);
        const { getByTestId } = render(<LayoutOrchestrator>
            <div data-testid="test-content">test content</div>
        </LayoutOrchestrator>);
        expect(getByTestId("test-content")).toBeInTheDocument();
        expect(getByTestId("dashboard-layout")).toBeInTheDocument();
    });

    it("should render loading state when granted", () => {
        setupLayoutValues(true, false);
        const { queryByTestId } = render(<LayoutOrchestrator>
            <div data-testid="test-content">test content</div>
        </LayoutOrchestrator>);
        expect(queryByTestId("test-content")).not.toBeInTheDocument();
        expect(queryByTestId("dashboard-layout")).not.toBeInTheDocument();
        expect(queryByTestId("login-layout")).not.toBeInTheDocument();
        expect(queryByTestId("layout-loading")).toBeInTheDocument();
    });

});