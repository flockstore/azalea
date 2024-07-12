import {render} from "@testing-library/react";
import {LayoutProvider} from "@/context/layout/LayoutContext";

describe("LayoutContext", () => {

    const TestComponent = () => {
        return <div>Hello</div>;
    };

    it("should render correctly", () => {
        render(
            <LayoutProvider>
                <TestComponent/>
            </LayoutProvider>
        );
    });

});