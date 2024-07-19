import {ReactNode} from "react";
import AccountViewLayout from "@/module/account/layout/AccountViewLayout";

/**
 * Defines the component props.
 */
type Props = {
    children: ReactNode;
};

/**
 * Defines the rendering behaviour of the account context.
 * @param children to render inside.
 * @constructor
 */
const AccountLayout = ({children}: Props) => {
    return <AccountViewLayout>{children}</AccountViewLayout>;
};

export default AccountLayout;