"use client";

import {createTheme, MantineColorsTuple} from "@mantine/core";
import "@fontsource/urbanist";
import "@fontsource/poppins";
import {passwordInput, textInput} from "@/style/components/input";
import {anchor} from "@/style/components/text";
import {button} from "@/style/components/button";

const primaryColor: MantineColorsTuple = [
    "#ecebff",
    "#d5d3ff",
    "#a6a3f9",
    "#7571f4",
    "#4b45ef",
    "#312aed",
    "#211ced",
    "#1311d3",
    "#0c0dbe",
    "#0009a8"
];

/**
 *
 */
export const mantineTheme = createTheme({
    fontFamily: "Poppins, sans-serif",
    headings: {
        fontFamily: "Urbanist, sans-serif",
    },
    colors: {
        "azalea-blue": primaryColor,
    },
    primaryShade: 4,
    primaryColor: "azalea-blue",
    components: {
        Button: button,
        TextInput: textInput,
        PasswordInput: passwordInput,
        Anchor: anchor,
    }
});