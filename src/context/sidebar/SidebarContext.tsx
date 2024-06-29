import {createContext, ReactNode, useCallback, useContext, useEffect, useState} from "react";
import {useMediaQuery} from "@mantine/hooks";

export interface SidebarContextProps {
    isExpanded: () => boolean;
    canCollapse: () => boolean;
    toggle: () => void;
}

const defaultValues: SidebarContextProps = {
    isExpanded: () => false,
    canCollapse: () => false,
    toggle: () => {
    }
};

const SidebarContext = createContext<SidebarContextProps>(defaultValues);

export const SidebarProvider = ({children}: { children: ReactNode }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const isMd = useMediaQuery("(min-width: 768px)")!;

    const canCollapse = useCallback(() => isMd, [isMd]);

    const toggle = () => {
        if (!canCollapse) {
            return;
        }
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        if (!canCollapse() && isExpanded) {
            setIsExpanded(false);
        }
    }, [isMd, canCollapse, isExpanded]);

    return (
        <SidebarContext.Provider
            value={{
                isExpanded: () => isExpanded,
                canCollapse: canCollapse,
                toggle
            }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => useContext(SidebarContext);