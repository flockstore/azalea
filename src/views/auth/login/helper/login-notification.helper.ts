import {notifications} from "@mantine/notifications";
import {auth} from "@/config/translation";

/**
 * Helper function to send notification.
 * @param t translations.
 * @param success or error.
 */
export const showFormNotification = ({t, success}: {t: any, success: boolean}) => {

    const title = success ? auth.success.title : auth.error.title;
    const message = success ? auth.success.message : auth.error.message;
    const color = success ? "teal" : "red";

    notifications.show({
        title: t(title),
        message: t(message),
        color: color
    });

};