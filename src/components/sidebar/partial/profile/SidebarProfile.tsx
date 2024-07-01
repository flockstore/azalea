"use client";

import {ActionIcon, Avatar, Flex, Skeleton, Text, Tooltip} from "@mantine/core";
import {IconLogout} from "@tabler/icons-react";

import styles from "./SidebarProfile.module.css";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import {useTranslations} from "next-intl";
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {User} from "next-auth";
import {profile} from "@/config/translation";

const SidebarProfile = () => {

    const { isExpanded } = useSidebar();
    const t = useTranslations();
    const router = useRouter();
    const {data: session, status} = useSession();
    const userProfile = session?.user as User;

    const profileStyles = isExpanded() ? styles.profileExpanded : styles.profile;

    const profileTooltipPosition = isExpanded() ? "top" : "right";
    const gagName = isExpanded() ? t(profile.gag) : "Ian Felipe";

    const logout = () => {
        signOut({redirect: false}).then(result => {
            router.push("/api/auth/federated-logout");
        });
    };

    return (
        <Skeleton visible={status === "loading"}>
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
                            src={userProfile.image || "img/avatar-holder.webp"}
                            alt={userProfile.name}
                        />
                    </Tooltip>
                    {isExpanded() &&
                        <Flex className={styles.context}>
                            <Text className={styles.name}>{userProfile.name}</Text>
                            <Text className={styles.organization}>{userProfile.organizations[0] || ''}</Text>
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
        </Skeleton>
    );
};

export default SidebarProfile;