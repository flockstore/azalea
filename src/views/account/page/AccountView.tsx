"use client";

import PersonalForm from "@/views/account/page/form/PersonalForm";
import {Box, Grid, Title, useMantineColorScheme, useMantineTheme} from "@mantine/core";
import {useTranslations} from "next-intl";
import ContextBanner from "@/components/context-banner/ContextBanner";
import {IconPencil} from "@tabler/icons-react";
import {account} from "@/config/translation";
import AvatarForm from "@/views/account/page/avatar/AvatarForm";
import React from "react";

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
                <Grid w="100%">
                    <Grid.Col span={{base: 12, lg: 6}}>
                        hola
                    </Grid.Col>
                    <Grid.Col span={{base: 12, lg: 6}}>
                        <AvatarForm/>
                    </Grid.Col>
                </Grid>
            </Box>

        </Box>
    );
};

export default AccountView;