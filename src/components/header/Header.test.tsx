import {render} from "@/common/test/util";
import Header from "@/components/header/Header";
import {setupSidebarMockValues} from "@/components/sidebar/Sidebar.test-util";

jest.mock("@/context/sidebar/SidebarContext", () => ({
    useSidebar: jest.fn(),
}));

jest.mock("@/components/header/partial/toolbar/HeaderToolbar", () =>
    // eslint-disable-next-line react/display-name
    () => <div data-testid="mock-toolbar">Mock toolbar</div>
);

jest.mock("@/components/header/partial/breadcrumb/HeaderBreadcrumb", () =>
    // eslint-disable-next-line react/display-name
    () => <div data-testid="mock-breadcrumb">Mock breadcrumb</div>
);

describe("Header component", () => {

    it("should render correctly", () => {
        setupSidebarMockValues(false, false, jest.fn());
        const { queryByTestId } = render(<Header/>);
        expect(queryByTestId("header")).toBeInTheDocument();
        expect(queryByTestId("mock-toolbar")).toBeInTheDocument();
    });

    it("should hide toolbar when collapsed", () => {
        setupSidebarMockValues(false, true, jest.fn(), false);
        const { queryByTestId } = render(<Header/>);
        expect(queryByTestId("header")).toBeInTheDocument();
        expect(queryByTestId("mock-toolbar")).not.toBeInTheDocument();
    });

});