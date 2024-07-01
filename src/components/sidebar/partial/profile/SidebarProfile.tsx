"use client";

import {ActionIcon, Avatar, Flex, Text, Tooltip} from "@mantine/core";
import {IconLogout} from "@tabler/icons-react";

import styles from "./SidebarProfile.module.css";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import {useTranslations} from "next-intl";
import {profile} from "@/config/translation";
import {signOut} from "next-auth/react";
import {useRouter} from "@/middleware";

const SidebarProfile = () => {

    const { isExpanded } = useSidebar();
    const t = useTranslations();
    const router = useRouter();

    const profileStyles = isExpanded() ? styles.profileExpanded : styles.profile;

    const profileTooltipPosition = isExpanded() ? "top" : "right";
    const gagName = isExpanded() ? t(profile.gag) : "Ian Felipe";

    const logout = () => {
        signOut({redirect: false}).then(result => {
            router.push("/api/auth/federated-logout");
        });
    };

    return (
        <Flex className={profileStyles}>

            <Flex
                align="center"
                className={`${!isExpanded() && styles.slug}`}
            >
                <Tooltip
                    label={gagName}
                    position={profileTooltipPosition}
                    offset={10}
                >
                    <Avatar
                        className={styles.picture}
                        src="img/avatar-holder.webp"
                        alt="Avatar"
                    />
                </Tooltip>
                {isExpanded() &&
                    <Flex className={styles.context}>
                        <Text className={styles.name}>Ian Felipe</Text>
                        <Text className={styles.organization}>Flock Store</Text>
                    </Flex>
                }
            </Flex>

            <Flex>
                <Tooltip
                    label={t(profile.logout)}
                    position="right"
                    offset={10}

                >
                    <ActionIcon className={styles.logout} onClick={logout}>
                        <IconLogout/>
                    </ActionIcon>
                </Tooltip>
            </Flex>

        </Flex>
    );
};

export default SidebarProfile;