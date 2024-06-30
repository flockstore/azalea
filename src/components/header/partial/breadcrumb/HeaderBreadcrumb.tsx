import {Anchor, Breadcrumbs} from "@mantine/core";
import {useBreadcrumb} from "@/context/breadcrumb/BreadcrumbContext";

import styles from "./HeaderBreadcrumb.module.css";

const HeaderBreadcrumb = () => {

    const { items} = useBreadcrumb();

    return (
        <Breadcrumbs>
            {items.map(item => (
                <Anchor
                    key={item.link}
                    href={item.link}
                    className={`${styles.breadLink} ${item.active && styles.breadActive}`}
                >{item.label}</Anchor>
            ))}
        </Breadcrumbs>
    );

};

export default HeaderBreadcrumb;