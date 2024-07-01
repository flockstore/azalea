"use client";

import {Flex} from "@mantine/core";
import {useBreadcrumb} from "@/context/breadcrumb/BreadcrumbContext";
import {useEffect} from "react";
import {navigation} from "@/config/translation";
import ProfileForm from "@/views/profile/form/ProfileForm";

const ProfileView = () => {

    const { setItems} = useBreadcrumb();
    useEffect(() => {
        setItems([
            {link: "/profile", label: navigation.profile, active: true},
        ]);
    }, [setItems]);

    return (
        <Flex w="100%">
            <ProfileForm/>
        </Flex>
    );

};

export default ProfileView;