"use client";

import {ActionIcon, Avatar, Flex, Text, Tooltip} from "@mantine/core";
import {IconLogout} from "@tabler/icons-react";

import styles from "./SidebarProfile.module.css";
import {useSidebar} from "@/context/sidebar/SidebarContext";
import {useTranslations} from "next-intl";
import {useRouter} from "next/navigation";
import {profile} from "@/config/translation";

export interface SidebarProfileProps {
    name: string;
    picture: string;
    organization: string;
    logoutAction: () => void;
}

/**
 * Defines the rendering behaviour for a profile slug
 * shown in the sidebar representing the actual logged-in
 * user.
 * @param name of the user.
 * @param picture to display.
 * @param organization of the user.
 * @param logoutAction to be executed when the user logs out.
 * @constructor
 */
const SidebarProfile = ({name, picture, organization, logoutAction}: SidebarProfileProps) => {

    const { isExpanded } = useSidebar();
    const t = useTranslations();
    const router = useRouter();

    const profileStyles = isExpanded ? styles.profileExpanded : styles.profile;

    const profileTooltipPosition = isExpanded ? "top" : "right";
    const gagName = isExpanded ? t(profile.gag) : name;

    return (
        <Flex className={profileStyles}>

            <Flex
                align="center"
                className={`${!isExpanded && styles.slug}`}
            >
                <Tooltip
                    label={gagName}
                    position={profileTooltipPosition}
                    offset={10}
                >
                    <Avatar
                        className={styles.picture}
                        src={picture}
                        alt={name}
                    />
                </Tooltip>
                {isExpanded &&
                    <Flex className={styles.context}>
                        <Text className={styles.name}>{name}</Text>
                        <Text className={styles.organization}>{organization}</Text>
                    </Flex>
                }
            </Flex>

            <Flex>
                <Tooltip
                    label={t(profile.logout)}
                    position="right"
                    offset={10}
                >
                    <ActionIcon className={styles.logout} onClick={logoutAction}>
                        <IconLogout/>
                    </ActionIcon>
                </Tooltip>
            </Flex>

        </Flex>
    );
};

export default SidebarProfile;