import {tss} from "tss-react";

export const SidebarItemStyles = (
    borderColor: string,
    active: string,
    alwaysActive: string
) => {
    return tss.create(() => ({
        sidebarItem: {
            borderLeft: `4px solid ${borderColor}`,
            cursor: "pointer",
            "&:hover": {
                borderLeft: `4px solid ${alwaysActive}`,
                color: alwaysActive,
                "& $sidebarIcon": {
                    color: alwaysActive
                }
            }
        },
        sidebarIcon: {
            color: active,
        }
    }));
};