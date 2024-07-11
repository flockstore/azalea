import {render} from "@/test/util";
import Header from "@/layout/dashboard/components/header/Header";
import {setupSidebarMockValues} from "@/layout/dashboard/components/sidebar/partial/Sidebar.test-util";

jest.mock("@/layout/dashboard/components/header/partial/toolbar/HeaderToolbar", () =>
    // eslint-disable-next-line react/display-name
    () => <div data-testid="mock-toolbar">Mock toolbar</div>
);

jest.mock("@/layout/dashboard/components/header/partial/breadcrumb/HeaderBreadcrumb", () =>
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