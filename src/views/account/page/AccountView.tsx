"use client";

import PersonalForm from "@/views/account/page/form/PersonalForm";
import {Box, Title, useMantineColorScheme, useMantineTheme} from "@mantine/core";
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

            <Title order={3} mb="md">{t(account.basic.form.section)}</Title>
            <Box mb="xl">
                <PersonalForm/>
            </Box>
            <Title order={3} mb="md">{t(account.basic.avatar.section)}</Title>
            <Box mb="xl">
                <Box h="2000px">XD</Box>
            </Box>

        </Box>
    );
};

export default AccountView;