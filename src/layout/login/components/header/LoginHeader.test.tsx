import {render} from "@/common/test/util";
import LoginHeader from "@/layout/login/components/header/LoginHeader";

jest.mock("@/components/sidebar/partial/switcher/SidebarSwitcher", () =>
    // eslint-disable-next-line react/display-name
    () => <div data-testid="mock-sidebar-switcher">Header</div>
);

describe("LoginHeader component", () => {

    it("should render correctly", () => {
        const { getByTestId } = render(<LoginHeader/>);
        expect(getByTestId("mock-sidebar-switcher")).toBeInTheDocument();
        expect(getByTestId("login-header")).toBeInTheDocument();
    });

});