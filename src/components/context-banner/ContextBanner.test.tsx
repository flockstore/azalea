import {render} from "@/test/util";
import ContextBanner, {ContextBannerProps} from "@/components/context-banner/ContextBanner";

const props: ContextBannerProps =  {
    title: "Title",
    subtitle: "Subtitle",
    picture: <div>picture</div>,
    bgColor: "red"
};

describe("ContextBanner Component", () => {

    it("should render correctly", () => {
        const {getByText, container} = render(<ContextBanner {...props}/>);
        expect(getByText("Title")).toBeInTheDocument();
        expect(getByText("Subtitle")).toBeInTheDocument();
        expect(getByText("picture")).toBeInTheDocument();
    });

});