import { useSidebar, SidebarProvider } from "@/context/sidebar/SidebarContext";
import { render, screen, fireEvent } from "@/test/util";
import '@testing-library/jest-dom';
import React from 'react';

describe("SidebarContext", () => {

    const TestComponent = () => {
        const {
            isExpanded,
            canCollapse,
            isResponsiveEnabled,
            toggleResponsive,
            toggle
        } = useSidebar();
        return (
            <div>
                <p data-testid="test-sidebar-expanded">{isExpanded.toString()}</p>
                <p data-testid="test-sidebar-collapse">{canCollapse.toString()}</p>
                <p data-testid="test-sidebar-responsive">{isResponsiveEnabled().toString()}</p>
                <button data-testid="test-toggle-responsive" onClick={toggleResponsive}>Toggle responsive</button>
                <button data-testid="test-toggle" onClick={toggle}>Toggle</button>
            </div>
        );
    };

    const renderWithProvider = (ui: React.ReactElement) => {
        return render(<SidebarProvider>{ui}</SidebarProvider>);
    };

    it("should render correctly", () => {
        renderWithProvider(<TestComponent />);
        expect(screen.getByTestId("test-sidebar-expanded")).toBeInTheDocument();
        expect(screen.getByTestId("test-sidebar-collapse")).toBeInTheDocument();
        expect(screen.getByTestId("test-sidebar-responsive")).toBeInTheDocument();
        expect(screen.getByTestId("test-toggle-responsive")).toBeInTheDocument();
        expect(screen.getByTestId("test-toggle")).toBeInTheDocument();
    });

    // TODO: Unit testing

});
