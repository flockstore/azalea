import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {useMediaQuery} from "@mantine/hooks";

export interface SidebarContextProps {
    isExpanded: boolean;
    canCollapse: boolean;
    isResponsiveEnabled: () => boolean;
    toggleResponsive: () => void;
    toggle: () => void;
}

const defaultValues: SidebarContextProps = {
    isExpanded: true,
    canCollapse: false,
    isResponsiveEnabled: () => false,
    toggleResponsive: () => {},
    toggle: () => {}
};

const SidebarContext = createContext<SidebarContextProps>(defaultValues);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {

    const [isExpanded, setIsExpanded] = useState(true);
    const [isResponsiveEnabled, setIsResponsiveEnabled] = useState(false);

    const canCollapse = useMediaQuery("(min-width: 992px)") ?? false;

    const toggle = () => {
        if (!canCollapse) {
            return;
        }
        setIsExpanded(!isExpanded);
    };

    const toggleResponsive = () => {
        if (canCollapse) {
            return;
        }
        setIsResponsiveEnabled(!isResponsiveEnabled);
    };

    useEffect(() => {

        if (!canCollapse && !isExpanded) {
            setIsExpanded(true);
        }

        if (canCollapse && isResponsiveEnabled) {
            setIsResponsiveEnabled(false);
        }

    }, [canCollapse, isExpanded, isResponsiveEnabled]);

    return (
        <SidebarContext.Provider
            value={{
                isExpanded,
                isResponsiveEnabled: () => isResponsiveEnabled,
                canCollapse,
                toggleResponsive,
                toggle
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => useContext(SidebarContext);
