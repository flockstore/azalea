import {Badge, Box, Button, TextInput} from "@mantine/core";
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
    const [sent, setSent] = useState(false);
    const [canResend, setCanResend] = useState(false);
    const [delayTime, setDelayTime] = useState(0);

    const displayingText =
        loading ? "" :
            canResend ? auth.help :
                sent ? auth.check
                    : auth.submit;

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

            setSent(true);
            setTimeout(() => {
                allowResend();
            }, (30 * 1000));

            setDelayTime(30);

            const interval = setInterval(() => {
                setDelayTime(prev => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        allowResend();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);

        } catch (error) {
            getLogger().error("Error while sending magic token", error);
            showFormNotification({t, success: false});
        } finally {
            setLoading(false);
        }
    };

    const allowResend = () => {
        setSent(false);
        setCanResend(true);
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
                    disabled={sent}
                    type="submit"
                    leftSection={<IconSend/>}
                    w="100%"
                >
                    {t(displayingText)} {delayTime !== 0 && <Badge ml="md" color="red">({delayTime}s)</Badge>}
                </Button>
            </Box>
        </form>
    );
};

export default LoginForm;