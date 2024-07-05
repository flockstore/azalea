import {SessionProvider} from "next-auth/react";

export const mockSession = {
    user: {
        name: "John Doe",
        email: "john.doe@example.com",
        image: "/img/avatar-holder.webp",
        organizations: ["Example Org"],
    },
    expires: "2024-12-31T23:59:59.999Z",
};

export const SessionDecorator = (Story: any) => {
    return (
        <SessionProvider session={mockSession}>
            <Story/>
        </SessionProvider>
    );
};