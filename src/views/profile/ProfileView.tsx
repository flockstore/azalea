"use client";

import {Box, Flex, Grid} from "@mantine/core";
import {useBreadcrumb} from "@/context/breadcrumb/BreadcrumbContext";
import {useEffect} from "react";
import {navigation} from "@/config/translation";
import ProfileForm from "@/views/profile/form/ProfileForm";
import DropMenu from "@/components/drop-menu/DropMenu";

const ProfileView = () => {

    const { setItems} = useBreadcrumb();
    useEffect(() => {
        setItems([
            {link: "/profile", label: navigation.profile, active: true},
        ]);
    }, [setItems]);

    return (
        <Grid w="100%">

            <Grid.Col span={{base: 12, md: 3}} h="100%">
                <Flex>
                    <DropMenu
                        slug="Mi perfil"
                        responsive={true}
                        height="500px"
                    >XD</DropMenu>
                </Flex>
            </Grid.Col>

            <Grid.Col span={{base: 12, md: 9}}>
                <ProfileForm/>
                <Box h="1500px" bg="red">chile</Box>
            </Grid.Col>

        </Grid>
    );

};

export default ProfileView;