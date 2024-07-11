// --- Translation mocks --- //

jest.mock("next-intl", () => ({
    useTranslations: jest.fn(),
}));

jest.mock("@/middleware", () => ({
    usePathname: jest.fn(),
}));

// --- Provider mocks --- //
jest.mock("@/context/sidebar/SidebarContext", () => ({
    useSidebar: jest.fn(),
}));

// --- Navigation mocks --- //
export const mockRouterPush = jest.fn();
jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            push: mockRouterPush,
            prefetch: () => null
        };
    }
}));

export const setLoading = jest.fn();
export const setDashboardAccess = jest.fn();
jest.mock("@/context/layout/LayoutContext", () => ({
    useLayout: () => ({
        setLoading: setLoading,
        setDashboardAccess: setDashboardAccess,
    }),
}));

beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
});