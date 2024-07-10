"use client";

import LoginView from "@/views/auth/login/LoginView";
import {useLayout} from "@/context/layout/LayoutContext";
import {useRouter} from "@/middleware";

const LoginPage = () => {

    const {dashboardAccess} = useLayout();
    const router = useRouter();

    if (dashboardAccess) {
        router.push("/");
    }

    return <LoginView/>;
};

export default LoginPage;