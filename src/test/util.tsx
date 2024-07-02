import React from "react";
import {render} from "@testing-library/react";
import {IntlProvider} from "next-intl";
import translations from "@/messages/es.json";
import {MantineProvider} from "@mantine/core";

/**
 * Render a component with base providers for
 * addon functionality.
 * @param component to render inside.
 */
const renderWithProviders = (component: React.ReactElement) => {
    return render(
        <MantineProvider>
            <IntlProvider messages={translations} locale="es">
                {component}
            </IntlProvider>
        </MantineProvider>
    );
};

export default renderWithProviders;