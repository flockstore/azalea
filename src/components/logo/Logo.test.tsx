import Logo from "@/components/logo/Logo";
import {render} from "@testing-library/react";

describe("Logo Component", () => {

    const checkPathsColor = (svgElement: HTMLElement, color: string) => {
        const paths = svgElement.querySelectorAll("path");
        paths.forEach(path => {
            expect(path).toHaveAttribute("fill", color);
        });
    };

    it("should render collapsed logo with desired color", () => {
        const { getByTestId, queryByTestId } = render(<Logo color="#000000" collapsed={true} />);
        const collapsedLogoSvg = getByTestId("collapsed-logo-svg");
        checkPathsColor(collapsedLogoSvg, "#000000");

        const expandedLogoSvg = queryByTestId("expanded-logo-svg");
        expect(expandedLogoSvg).not.toBeInTheDocument();
    });

    it("should render expanded logo with desired color", () => {
        const { getByTestId, queryByTestId } = render(<Logo color="#000000" collapsed={false} />);
        const expandedLogoSvg = getByTestId("expanded-logo-svg");
        checkPathsColor(expandedLogoSvg, "#000000");

        const collapsedLogoSvg = queryByTestId("collapsed-logo-svg");
        expect(collapsedLogoSvg).not.toBeInTheDocument();
    });

});
