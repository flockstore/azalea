// --- Localization configuration --- //
import {user} from "@/config/translation";

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

export const profile = {
    aboutMax: 45,
    nameMax: 20,
    genders: [
        {
            translation: user.genders.male,
            value: "male"
        },
        {
            translation: user.genders.female,
            value: "female"
        },
        {
            translation: user.genders.other,
            value: "other"
        }
    ]
};