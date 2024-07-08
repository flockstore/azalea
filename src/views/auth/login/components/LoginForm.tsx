import {Box, Button, TextInput} from "@mantine/core";
import {useTranslations} from "next-intl";
import {auth} from "@/config/translation";
import {IconMail, IconSend} from "@tabler/icons-react";
import {useForm} from "@mantine/form";
import {Account} from "appwrite";
import {client, ID} from "@/provider/appwrite.provider";
import {getLogger} from "@/provider/logging.provider";
import {notifications} from "@mantine/notifications";

export interface LoginValues {
    email: string;
}

const LoginForm = () => {

    const t = useTranslations();

    const form = useForm<LoginValues>({
        initialValues: {
            email: ""
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : t(auth.invalid)),
        }
    });

    const handleSubmit = async ({email}: LoginValues) => {
        try {
            const account = new Account(client);
            await account.createMagicURLToken(ID.unique(), email);
            notifications.show({
                title: t(auth.success.title),
                message: t(auth.success.message),
                color: "teel"
            });
        } catch (error) {
            getLogger().error("Error while sending magic token", error);
            notifications.show({
                title: t(auth.error.title),
                message: t(auth.error.message),
                color: "red"
            });
        }
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
            <Box my="xl">
                <TextInput
                    leftSection={<IconMail/>}
                    placeholder={t(auth.holder)}
                    label={t(auth.label)}
                    tabIndex={1}
                    {...form.getInputProps("email")}
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