import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import {Flex, MantineProvider} from "@mantine/core";
import translations from "@/messages/es.json";
import {IntlProvider} from "use-intl";

const AllProviders: React.FC = ({ children }: any) => {
    return (
        <MantineProvider>
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
