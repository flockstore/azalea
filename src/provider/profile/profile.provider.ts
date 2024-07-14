import {account} from "@/provider/appwrite.provider";

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