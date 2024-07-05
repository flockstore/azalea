import React from "react";

export interface ScrollMockProps {
    scrollbarSize: any;
    children?: React.ReactNode;
}

const ScrollMock = ({scrollbarSize, children}: ScrollMockProps) => {
    return <div>{children}</div>;
};

export default ScrollMock;