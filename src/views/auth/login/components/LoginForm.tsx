import {Box, Button, TextInput} from "@mantine/core";
import {useTranslations} from "next-intl";
import {auth} from "@/config/translation";
import {IconMail, IconSend} from "@tabler/icons-react";
import {useForm} from "@mantine/form";
import {getLogger} from "@/provider/logging.provider";
import {signIn} from "@/provider/appwrite.provider";
import {showFormNotification} from "@/views/auth/login/helper/login-notification.helper";
import {useState} from "react";

export interface LoginValues {
    email: string;
}

const LoginForm = () => {

    const t = useTranslations();
    const [loading, setLoading] = useState(false);

    const form = useForm<LoginValues>({
        initialValues: {
            email: ""
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : t(auth.invalid)),
        }
    });

    const performLogin = async (email: string) => {
        try {
            await signIn(email);
            showFormNotification({t, success: true});
        } catch (error) {
            getLogger().error("Error while sending magic token", error);
            showFormNotification({t, success: false});
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = ({email}: LoginValues) => {
        setLoading(true);
        performLogin(email);
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
                    loading={loading}
                    type="submit"
                    leftSection={<IconSend/>}
                    w="100%"
                >{t(auth.submit)}</Button>
            </Box>
        </form>
    );
};

export default LoginForm;