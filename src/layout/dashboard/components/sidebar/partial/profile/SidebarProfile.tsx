"use client";

import {ActionIcon, Avatar, Flex, Text, Tooltip} from "@mantine/core";
import {IconLogout} from "@tabler/icons-react";

import styles from "./SidebarProfile.module.css";
import {useTranslations} from "next-intl";
import {profile} from "@/config/translation";

export interface SidebarProfileProps {
    name: string;
    picture: string;
    organization: string;
    logoutAction: () => void;
    expanded: boolean;
}

/**
 * Defines the rendering behaviour for a profile slug
 * shown in the sidebar representing the actual logged-in
 * user.
 * @param name of the user.
 * @param picture to display.
 * @param organization of the user.
 * @param logoutAction to be executed when the user logs out.
 * @param expanded if sidebar is expanded or shrink.
 * @constructor
 */
const SidebarProfile = ({name, picture, organization, logoutAction, expanded}: SidebarProfileProps) => {

    const t = useTranslations();

    const profileStyles = expanded ? styles.profileExpanded : styles.profile;

    const profileTooltipPosition = expanded ? "top" : "right";
    const gagName = expanded ? t(profile.gag) : name;

    return (
        <Flex className={profileStyles}>

            <Flex
                align="center"
                className={`${!expanded && styles.slug}`}
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
                {expanded &&
                    <Flex className={styles.context}>
                        <Text data-testid="sidebar-profile-name" className={styles.name}>{name}</Text>
                        <Text data-testid="sidebar-profile-organization" className={styles.organization}>{organization}</Text>
                    </Flex>
                }
            </Flex>

            <Flex>
                <Tooltip
                    label={t(profile.logout)}
                    position="right"
                    offset={10}
                >
                    <ActionIcon className={styles.logout} onClick={logoutAction} data-testid="sidebar-logout">
                        <IconLogout/>
                    </ActionIcon>
                </Tooltip>
            </Flex>

        </Flex>
    );
};

export default SidebarProfile;