import React from "react";
import {render, RenderOptions} from "@testing-library/react";
import {Flex, MantineProvider} from "@mantine/core";
import translations from "@/common/messages/es.json";
import {IntlProvider} from "use-intl";
import {useTranslations} from "next-intl";
import {usePathname} from "@/middleware";
import {mantineTheme} from "@/common/style/theme";

const AllProviders: React.FC = ({ children }: any) => {
    return (
        <MantineProvider theme={mantineTheme}>
            <IntlProvider messages={translations} locale="es">
                <Flex pos="relative">
                    {children}
                </Flex>
            </IntlProvider>
        </MantineProvider>
    );
};

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
    render(ui, { wrapper: AllProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };

/**
 * Setup next-intl basic behaviour like
 * translations and pathname mocking.
 * @param path name to mock.
 */
export const setupIntlBasics = (path: string) => {
    const mockUseTranslations = useTranslations as jest.Mock;
    const mockUsePathname = usePathname as jest.Mock;
    mockUseTranslations.mockReturnValue((key: string) => key);
    mockUsePathname.mockReturnValue(path);
};