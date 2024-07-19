"use client";

import React, { useRef } from "react";
import { Button } from "@mantine/core";

const Test = ({ login }: any) => {
    const submitButtonRef = useRef<HTMLButtonElement>(null);

    const handleSignInClick = () => {
        if (submitButtonRef.current) {
            submitButtonRef.current.click();
        }
    };

    return (
        <form action={login}>
            <button type="submit" ref={submitButtonRef} style={{display: "none"}}></button>
            <Button onClick={handleSignInClick}>Sign in</Button>
        </form>
    );
};

export default Test;