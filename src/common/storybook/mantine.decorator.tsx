import "@mantine/core/styles.css";

import React, {useCallback, useEffect} from "react";
import {addons} from "@storybook/preview-api";
import {DARK_MODE_EVENT_NAME} from "storybook-dark-mode";
import {MantineProvider, useMantineColorScheme} from "@mantine/core";
import {mantineTheme} from "@/common/style/theme";

const channel = addons.getChannel();

/**
 * Defines a color scheme wrapper for mantine.
 * @param children to be rendered inside.
 * @constructor
 */
function ColorSchemeWrapper({children}: { children: React.ReactNode }) {
    const {setColorScheme} = useMantineColorScheme();

    const handleColorScheme = useCallback((value: boolean) => {
        setColorScheme(value ? "dark" : "light");
    }, [setColorScheme]);

    useEffect(() => {
        channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
        return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
    }, [handleColorScheme]);

    return <>{children}</>;
}

/**
 * Multiple decorators containing scheme and mantine theme provider.
 */
export const decorators = [
    (renderStory: any) => (
        <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>
    ),
    (renderStory: any) => (
        <MantineProvider theme={mantineTheme}>{renderStory()}</MantineProvider>
    ),
];