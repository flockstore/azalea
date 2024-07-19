import {auth, signIn} from "@/common/provider/auth.provider";

const Home = async () => {

    const login = async () => {
        "use server";
        await signIn("logto");
    };

    const session = await auth();
    const text = JSON.stringify(session);

    return (
        <div>
            {typeof window === 'undefined' ? 'server' : 'client'}
            {text}
        </div>
    );

};

export default Home;