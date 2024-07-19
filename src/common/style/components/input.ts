import {InputBase, PasswordInput, TextInput} from "@mantine/core";

const defaultInput = {
    defaultProps: {
        radius: "lg",
    },
    styles: {
        label: {
            fontSize: "14px",
            marginBottom: "8px"
        },
        input: {
            transition: "border-color 0.3s ease",
            borderWidth: "1.5px",
            paddingTop: "20px",
            paddingBottom: "20px"
        },
    }
};

export const textInput = TextInput.extend(defaultInput);
export const passwordInput = PasswordInput.extend(defaultInput);
export const baseInput = InputBase.extend(defaultInput);