import {NextIntlClientProvider} from "next-intl";
import messages from "@/messages/es.json";

/**
 * next-itl decorator which load messages in storybook context.
 * @param Story to render inside.
 * @constructor
 */
export const NextIntlDecorator = (Story: any) => {
    return (
        <NextIntlClientProvider locale="es" messages={messages}>
            <Story/>
        </NextIntlClientProvider>
    );
};