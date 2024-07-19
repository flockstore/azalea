import {render} from "@/common/test/util";
import LoginPicture from "@/layout/login/components/picture/LoginPicture";

describe("LoginPicture Component", () => {

    it("should render correctly", () => {
        const {getByTestId} = render(<LoginPicture/>);
        expect(getByTestId("login-picture")).toBeInTheDocument();
    });

});