// --- Translation mocks --- //
jest.mock("next-intl", () => ({
    useTranslations: jest.fn(),
}));

jest.mock("@/middleware", () => ({
    usePathname: jest.fn(),
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