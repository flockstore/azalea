import {Box, Button, TextInput} from "@mantine/core";
import {useTranslations} from "next-intl";
import {auth} from "@/config/translation";
import {IconMail, IconSend} from "@tabler/icons-react";

const LoginForm = () => {

    const t = useTranslations();

    return (
        <form>
            <Box my="xl">
                <TextInput
                    leftSection={<IconMail/>}
                    placeholder={t(auth.holder)}
                    label={t(auth.label)}
                />
            </Box>
            <Box my="xl">
                <Button
                    leftSection={<IconSend/>}
                    w="100%"
                >{t(auth.submit)}</Button>
            </Box>
        </form>
    );
};

export default LoginForm;