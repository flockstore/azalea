import {Models} from "appwrite";
import Target = Models.Target;

type OriginalUser<Preferences extends Models.Preferences> = {
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
    prefs: Preferences;
    targets: Target[];
    accessedAt: string;
};

type User = OriginalUser<any>;
