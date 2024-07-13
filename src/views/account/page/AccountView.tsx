"use client";

import ProfileForm from "@/views/account/page/form/ProfileForm";
import {Box, useMantineColorScheme, useMantineTheme} from "@mantine/core";
import {useTranslations} from "next-intl";
import ContextBanner from "@/components/context-banner/ContextBanner";
import {IconPencil} from "@tabler/icons-react";
import {account} from "@/config/translation";

const AccountView = () => {

    const t = useTranslations();
    const { colors } = useMantineTheme();
    const { colorScheme } = useMantineColorScheme();
    const bgColor = colorScheme === "light" ? colors["azalea-blue"][4] : colors.dark[9];
    const color = colorScheme === "light" ? colors.gray[0] : colors.dark[0];

    return (
        <Box>

            <Box mb="lg">
                <ContextBanner
                    title={t(account.basic.title)}
                    subtitle={t(account.basic.subtitle)}
                    picture={<IconPencil size={48} color={color}/>}
                    bgColor={bgColor}
                    color={color}
                />
            </Box>

            <ProfileForm/>

        </Box>
    );
};

export default AccountView;