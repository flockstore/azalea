import {account, client, getUser} from "@/provider/appwrite.provider";
import {UserPreferences} from "@/model/user";
import {Avatars} from "appwrite";

/**
 * Update the user profile from actual logged account.
 * @param updateValues to update.
 */
export const updateProfile = async (updateValues: any) => {

    if (updateValues.name) {
        await account.updateName(updateValues.name);
    }

    delete updateValues.name;

    const actualPreferences = await account.getPrefs();
    await account.updatePrefs({...actualPreferences, ...updateValues});

};

export const getProfilePicture = async () => {

    const user = await getUser();

    if (!user.prefs.avatarId) {
        return new Avatars(client).getInitials(
            user.name,
            512,
            512,
            "black"
        );
    }

    return new Avatars(client).getInitials(
        user.name,
        513,
        513,
        "black"
    );

};