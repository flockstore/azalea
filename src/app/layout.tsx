import {ReactNode} from "react";

import "@mantine/core/styles.css";

/**
 * Defines the component props.
 */
type Props = {
    children: ReactNode;
};

/**
 * Root layout only passing not-found children
 * when a not found locale was provided.
 * @param children to pass as not-found.
 * @constructor to render.
 */
const RootLayout = ({children}: Props) => {
    return children;
};

export default RootLayout;