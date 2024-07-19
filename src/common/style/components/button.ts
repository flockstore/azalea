import {Button} from "@mantine/core";

export const button = Button.extend({
    defaultProps: {
        radius: "lg",
    },
    styles: () => ({
        root: {
            transition: "border-color 0.3s ease, background-color 0.3s ease",
        }
    })
});