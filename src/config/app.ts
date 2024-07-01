// --- Localization configuration --- //
export const localization = {
    LOCALES: ["es"],
    DEFAULT: "es",
    TIME_ZONE: "America/Bogota"
};

// --- Logto configuration --- //
export const logto = {
    clientId: process.env.LOGTO_ID,
    secret: process.env.LOGTO_SECRET,
    logoutURL: process.env.LOGTO_LOGOUT_URL,
    endpoint: process.env.LOGTO_ENDPOINT,
};