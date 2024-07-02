import {createContext, ReactNode, useCallback, useContext, useEffect, useState} from "react";
import {useMediaQuery} from "@mantine/hooks";

export interface SidebarContextProps {
    isExpanded: boolean;
    canCollapse: () => boolean;
    isResponsiveEnabled: () => boolean;
    toggleResponsive: () => void;
    toggle: () => void;
}

const defaultValues: SidebarContextProps = {
    isExpanded: true,
    canCollapse: () => false,
    isResponsiveEnabled: () => false,
    toggleResponsive: () => {},
    toggle: () => {}
};

const SidebarContext = createContext<SidebarContextProps>(defaultValues);

export const SidebarProvider = ({children}: { children: ReactNode }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isResponsiveEnabled, setIsResponsiveEnabled] = useState(false);

    const isLg = useMediaQuery("(min-width: 992px)")!;

    const canCollapse = useCallback(() => isLg, [isLg]);

    const toggle = () => {
        if (!canCollapse()) {
            return;
        }
        setIsExpanded(!isExpanded);
    };

    const toggleResponsive = () => {
        if (canCollapse()) {
            return;
        }
        setIsResponsiveEnabled(!isResponsiveEnabled);
    };

    useEffect(() => {

        if (!canCollapse() && !isExpanded) {
            setIsExpanded(true);
        }

    }, [isLg, canCollapse, isExpanded]);

    return (
        <SidebarContext.Provider
            value={{
                isExpanded,
                isResponsiveEnabled: () => isResponsiveEnabled,
                canCollapse: canCollapse,
                toggleResponsive,
                toggle
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => useContext(SidebarContext);