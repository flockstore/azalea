import {render} from "@/test/util";
import {setupSidebarMockValues} from "@/layout/dashboard/components/sidebar/partial/Sidebar.test-util";
import SidebarHeader from "@/layout/dashboard/components/sidebar/partial/header/SidebarHeader";

jest.mock("@/context/sidebar/SidebarContext", () => ({
    useSidebar: jest.fn(),
}));

jest.mock("@/layout/dashboard/components/sidebar/partial/switcher/SidebarSwitcher", () => ({
    __esModule: true,
    default: jest.fn(({ width, ...props }) => (
        <div data-testid="side-header-switcher" style={{ width }} {...props}>
            Sidebar Switcher Mock
        </div>
    )),
}));

describe("SidebarNav Component", () => {

    beforeEach(() => {
        setupSidebarMockValues(true);
    });

    it("should render correctly", () => {
        const { getByTestId} = render(<SidebarHeader/>);
        expect(getByTestId("side-header-logo")).toBeInTheDocument();
        expect(getByTestId("side-header-switcher")).toBeInTheDocument();
        expect(getByTestId("expanded-logo-svg")).toBeInTheDocument();
    });

    it("should render collapsed version", () => {
        setupSidebarMockValues(false);
        const { getByTestId} = render(<SidebarHeader/>);
        expect(getByTestId("side-header-logo")).toBeInTheDocument();
        expect(getByTestId("side-header-switcher")).toBeInTheDocument();
        expect(getByTestId("collapsed-logo-svg")).toBeInTheDocument();
    });

});