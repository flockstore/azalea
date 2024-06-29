import {useMessages} from "next-intl";
import {localization} from "@/config/app";
import {notFound} from "next/navigation";
import BaseLayout from "@/layout/base/BaseLayout";

const Layout = ({children, params: {locale}}: any) => {

    if (!localization.LOCALES.includes(locale as any)) {
        notFound();
    }

    const messages = useMessages();

    return (
        <html lang={locale}>
        <head>
            <title>NextJS</title>
        </head>
        <body>
        <BaseLayout locale={locale} messages={messages}>
            {children}
        </BaseLayout>
        </body>
        </html>
    );
};

export default Layout;