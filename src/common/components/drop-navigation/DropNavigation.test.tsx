import DropNavigation, {DropNavigationItem} from "@/common/components/drop-navigation/DropNavigation";
import {render, setupIntlBasics} from "@/common/test/util";
import {act, fireEvent} from "@testing-library/react";
import {waitFor} from "@testing-library/dom";
import {middleRouterPush} from "@/common/test/mocks";

jest.mock("@/common/components/drop-menu/DropMenu", () => ({
    __esModule: true,
    default: jest.fn(({children, ...props}) => {
        let clearedProps = {...props,
            responsive: undefined,
            maxHeight: undefined
        };
        delete clearedProps.responsive;
        delete clearedProps.maxHeight;
        return <div data-testid="drop-navigation" {...clearedProps}>
            {children}
        </div>;
    }),
}));

/**
 * Define links to be used.
 */
const links: DropNavigationItem[] = [
    {
        text: "account",
        link: "/account",
        icon: <div></div>
    },
    {
        text: "email",
        link: "/account/email",
        icon: <div></div>
    }
];

describe("DropNavigation Component", () => {

    beforeEach(() => {
       setupIntlBasics("/path");
    });

    it("should have rendered the correct quantity of links", () => {
        const  {getAllByRole } = render(<DropNavigation items={links} maxHeight="2000px"/>);
        const buttons = getAllByRole("button");
        expect(buttons).toHaveLength(links.length);
    });

    it("should call router when clicked a button", async () => {

        const  {getAllByRole } = render(<DropNavigation items={links} maxHeight="2000px"/>);
        const buttons = getAllByRole("button");

        act(() => {
           fireEvent.click(buttons[0]);
        });

        await waitFor(() => {
            expect(middleRouterPush).toHaveBeenCalled();
        });

    });

});