import {Models} from "appwrite";
import Target = Models.Target;

export enum Gender {
    MALE = "male", FEMALE = "female", OTHER = "other"
}

export type UserPreferences = {
    gender: Gender;
    about: string;
    avatarId: string;
}

export type OriginalUser = {
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    name: string;
    password?: string;
    hash?: string;
    hashOptions?: object;
    registration: string;
    status: boolean;
    labels: string[];
    passwordUpdate: string;
    email: string;
    phone: string;
    emailVerification: boolean;
    phoneVerification: boolean;
    mfa: boolean;
    prefs: UserPreferences;
    targets: Target[];
    accessedAt: string;
};

export type User = OriginalUser<any>;
