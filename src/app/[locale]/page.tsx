"use client";

import {useTranslations} from "next-intl";
import {signIn, signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

const Home = () => {

    const t = useTranslations();
    const session = useSession();
    const router = useRouter();

    const logout = () => {
        signOut({redirect: false}).then(result => {
            router.push("/api/auth/federated-logout");
        });
    };

    const login = () => {
        signIn("logto");
    };

    return (
        <div>
            {JSON.stringify(session)}
            <button onClick={login}>Sign In</button>
            <button onClick={logout}>Logout</button>
        </div>
    );

};

export default Home;