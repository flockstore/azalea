import {Anchor, Breadcrumbs} from "@mantine/core";
import {useBreadcrumb} from "@/context/breadcrumb/BreadcrumbContext";

import styles from "./HeaderBreadcrumb.module.css";
import {useRouter} from "@/middleware";

const HeaderBreadcrumb = () => {

    const { items} = useBreadcrumb();
    const router = useRouter();
    const navigate = (link: string) => router.push(link);

    return (
        <Breadcrumbs>
            {items.map(item => (
                <Anchor
                    key={item.link}
                    onClick={() => navigate(item.link)}
                    className={`${styles.breadLink} ${item.active && styles.breadActive}`}
                >{item.label}</Anchor>
            ))}
        </Breadcrumbs>
    );

};

export default HeaderBreadcrumb;