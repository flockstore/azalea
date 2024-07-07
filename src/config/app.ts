// --- Localization configuration --- //
export const localization = {
    LOCALES: ["es"],
    DEFAULT: "es",
    TIME_ZONE: "America/Bogota"
};

// --- Appwrite configuration --- //
export const appWrite = {
    app: process.env.NEXT_PUBLIC_APPWRITE_APP,
    endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
};