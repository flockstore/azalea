import {User} from "@/model/user";

const mockUser: User = {
    $id: "user_id_123",
    $createdAt: new Date().toISOString(),
    $updatedAt: new Date().toISOString(),
    name: "John Doe",
    password: "securepassword123",
    hash: "hashedpassword123",
    hashOptions: { salt: "somesalt" },
    registration: new Date().toISOString(),
    status: true,
    labels: ["admin", "user"],
    passwordUpdate: new Date().toISOString(),
    email: "john.doe@example.com",
    phone: "+1234567890",
    emailVerification: true,
    phoneVerification: true,
    mfa: false,
    prefs: {
        theme: "dark",
        language: "en",
    },
    targets: [],
    accessedAt: new Date().toISOString()
};

export default mockUser;