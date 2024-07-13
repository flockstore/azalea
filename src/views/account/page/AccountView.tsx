"use client";

import {useBreadcrumb} from "@/context/breadcrumb/BreadcrumbContext";
import {useEffect} from "react";
import {navigation} from "@/config/translation";
import ProfileForm from "@/views/account/page/form/ProfileForm";

const AccountView = () => {

    const { setItems} = useBreadcrumb();
    useEffect(() => {
        setItems([
            {link: "/account", label: navigation.account, active: true},
        ]);
    }, [setItems]);

    return (<ProfileForm/>);

};

export default AccountView;