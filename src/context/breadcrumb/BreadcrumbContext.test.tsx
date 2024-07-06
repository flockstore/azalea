import {render, renderHook, screen} from "@testing-library/react";
import { BreadcrumbProvider, useBreadcrumb } from "./BreadcrumbContext";
import { useTranslations } from "next-intl";
import React from "react";
import {setupIntlBasics} from "@/test/util";


const TestComponent = () => {
    const { items, setItems } = useBreadcrumb();

    React.useEffect(() => {
        setItems([
            { label: "home", link: "/", active: true },
            { label: "about", link: "/about", active: false },
        ]);
    }, [setItems]);

    return (
        <div>
            {items.map((item, index) => (
                <div key={index} data-testid="breadcrumb-item">
                    {item.label}
                </div>
            ))}
        </div>
    );
};

describe("BreadcrumbContext", () => {

    beforeEach(() => {
        setupIntlBasics("/test-path");
    });

    it("should provide default breadcrumb items", () => {
        const { result } = renderHook(() => useBreadcrumb(), {
            wrapper: BreadcrumbProvider,
        });

        expect(result.current.items).toEqual([]);
    });

    it("should update breadcrumb items", () => {
        render(
            <BreadcrumbProvider>
                <TestComponent />
            </BreadcrumbProvider>
        );

        const items = screen.getAllByTestId("breadcrumb-item");
        expect(items).toHaveLength(2);
        expect(items[0].textContent).toBe("home");
        expect(items[1].textContent).toBe("about");
    });

    it("should translate breadcrumb labels", () => {

        render(
            <BreadcrumbProvider>
                <TestComponent />
            </BreadcrumbProvider>
        );

        const items = screen.getAllByTestId("breadcrumb-item");
        expect(items[0].textContent).toBe("home");
        expect(items[1].textContent).toBe("about");

    });
});
