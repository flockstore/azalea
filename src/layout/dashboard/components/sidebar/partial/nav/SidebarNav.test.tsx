import {render, screen, setupIntlBasics} from "@/test/util";
import {fireEvent} from "@testing-library/dom";
import {mockRouterPush} from "@/test/mocks";
import {navigation} from "@/config/translation";
import SidebarNav, {SidebarNavItem} from "@/layout/dashboard/components/sidebar/partial/nav/SidebarNav";
import {setupSidebarMockValues} from "@/layout/dashboard/components/sidebar/partial/Sidebar.test-util";

jest.mock("@/context/sidebar/SidebarContext", () => ({
    useSidebar: jest.fn(),
}));

export const navigationItems: SidebarNavItem[] = [
    {
        translation: navigation.dashboard,
        icon: <div/>,
        link: "/dashboard"
    },
    {
        translation: navigation.contact,
        icon: <div/>,
        link: "/contacts"
    }
];

describe("SidebarNav Component", () => {

    beforeEach(() => {
        setupSidebarMockValues(true);
        setupIntlBasics("/dashboard");
    });

    it("should render correctly with requested quantity of items", () => {
        const { queryByTestId } = render(<SidebarNav items={navigationItems}/>);
        expect(queryByTestId("sidebar-nav")).toBeInTheDocument();
        navigationItems.forEach(item => {
            expect(screen.getByText(item.translation)).toBeInTheDocument();
        });
    });

    it("should navigate when a navigation item is clicked", () => {
        render(<SidebarNav items={navigationItems} />);
        fireEvent.click(screen.getByText("navigation.contact"));
        expect(mockRouterPush).toHaveBeenCalledWith("/contacts");
    });

    it("should highlight the active navigation item correctly", () => {
        setupIntlBasics("/contacts");
        render(<SidebarNav items={navigationItems} />);
        const activeNavItem = screen.getByText("navigation.contact");
        expect(activeNavItem).toBeInTheDocument();
        expect(activeNavItem).toHaveAttribute("aria-current", "page");
    });


});
