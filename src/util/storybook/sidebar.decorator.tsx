import {SidebarProvider} from "@/context/sidebar/SidebarContext";

export const SidebarDecorator = (Story: any) => {
    return (
        <SidebarProvider>
            <Story/>
        </SidebarProvider>
    );
};