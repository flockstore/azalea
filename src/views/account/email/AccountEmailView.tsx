"use client";

import {Box, useMantineColorScheme, useMantineTheme} from "@mantine/core";
import ContextBanner from "@/components/context-banner/ContextBanner";
import {account} from "@/config/translation";
import {IconMailbox} from "@tabler/icons-react";
import {useTranslations} from "next-intl";

const AccountEmailView = () => {

    const t = useTranslations();
    const { colors } = useMantineTheme();
    const { colorScheme } = useMantineColorScheme();
    const bgColor = colorScheme === "light" ? colors["azalea-blue"][4] : colors.dark[9];
    const color = colorScheme === "light" ? colors.gray[0] : colors.dark[0];

    return (
        <Box>

            <Box mb="lg">
                <ContextBanner
                    title={t(account.email.title)}
                    subtitle={t(account.email.subtitle)}
                    picture={<IconMailbox size={48} color={color}/>}
                    bgColor={bgColor}
                    color={color}
                />
            </Box>

            TODO

        </Box>
    );
};

export default AccountEmailView;