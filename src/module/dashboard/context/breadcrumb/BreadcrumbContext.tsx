import {createContext, ReactNode, useContext, useState} from "react";
import {useTranslations} from "next-intl";

export interface BreadcrumbItem {
    label: string;
    link: string;
    active?: boolean;
}

export interface BreadcrumbContextProps {
    items: BreadcrumbItem[];
    setItems: (items: BreadcrumbItem[]) => void;
}

const defaultValues: BreadcrumbContextProps = {
    items: [],
    setItems: () => {},
};

export const BreadcrumbContext = createContext<BreadcrumbContextProps>(defaultValues);

export const BreadcrumbProvider = ({ children }: { children: ReactNode }) => {

    const [items, setItems] = useState<BreadcrumbItem[]>([]);
    const t = useTranslations();

    return (
        <BreadcrumbContext.Provider
            value={{
                items: items.map((item) => ({...item, label: t(item.label)})),
                setItems: setItems,
            }}
        >
            {children}
        </BreadcrumbContext.Provider>
    );

};

export const useBreadcrumb = () => useContext(BreadcrumbContext);