import {useTranslations} from "next-intl";

const Home = () => {
    
    const t = useTranslations();
    
    return (
        <main>
            {t("test")}
        </main>
    );
    
};

export default Home;