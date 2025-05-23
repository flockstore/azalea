"use client";

import {Box, Flex, Text, Title} from "@mantine/core";
import {useTranslations} from "next-intl";
import {auth} from "@/config/translation";

import styles from "./LoginView.module.css";
import LoginForm from "@/views/auth/login/components/LoginForm";

const LoginView = () => {

    const t = useTranslations();

    return (
        <Flex className={styles.container}>
            <Box className={styles.title}>
                <Title>{t(auth.login)}</Title>
                <Text>{t(auth.sub)}</Text>
            </Box>
            <LoginForm/>
        </Flex>
    );
};

export default LoginView;