import {render} from "@/test/util";
import LoginLayout from "@/layout/login/LoginLayout";

jest.mock("@/layout/login/components/picture/LoginPicture", () =>
    // eslint-disable-next-line react/display-name
    () => <div data-testid="mock-login-picture">Picture</div>
);

jest.mock("@/layout/login/components/header/LoginHeader", () =>
    // eslint-disable-next-line react/display-name
    () => <div data-testid="mock-login-header">Header</div>
);

describe("LoginLayout component", () => {

    it("should render correctly", () => {
        const {getByTestId} = render(
            <LoginLayout>
                <div data-testid="test-children">Test</div>
            </LoginLayout>
        );
        expect(getByTestId("test-children")).toBeInTheDocument();
        expect(getByTestId("mock-login-picture")).toBeInTheDocument();
        expect(getByTestId("mock-login-header")).toBeInTheDocument();
    });

});