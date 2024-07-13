import {ReactNode} from "react";
import AccountViewLayout from "@/views/account/layout/AccountViewLayout";

/**
 * Defines the component props.
 */
type Props = {
    children: ReactNode;
};

/**
 * Defines the rendering behaviour of the account layout.
 * @param children to render inside.
 * @constructor
 */
const AccountLayout = ({children}: Props) => {
    return <AccountViewLayout>{children}</AccountViewLayout>;
};

export default AccountLayout;