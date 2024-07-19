"use client";

import {useForm} from "@mantine/form";
import {Button, Combobox, Flex, Grid, Input, InputBase, Skeleton, TextInput, useCombobox} from "@mantine/core";
import {profile} from "@/common/config/app";
import {useTranslations} from "next-intl";
import {account, user} from "@/common/config/translation";
import {IconCloud} from "@tabler/icons-react";
import {useEffect, useState} from "react";
import {getLogger} from "@/common/provider/logging.provider";
import {notifications} from "@mantine/notifications";

export interface ProfileFormValues {
    name: string;
    gender: any;
    about: string;
}

const PersonalForm = () => {

    const t = useTranslations();
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    // ----  Fetch initial data for user ---- //
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userAccount = {} as any; // TODO: Set user acc
                form.setValues({
                    name: userAccount.name || "",
                    gender: userAccount.prefs.gender || "other",
                    about: userAccount.prefs.about || ""
                });
                setLoading(false);
            } catch (error) {
                getLogger().error(error, "An error has occurred while fetching profile data");
                notifications.show({
                    color: "red",
                    title: t(account.basic.form.error.load.title),
                    message: t(account.basic.form.error.load.sub)
                });
            }
        };
        fetchUser();
    }, []);

    // ---- Setup form ---- //
    const form = useForm<ProfileFormValues>({
        initialValues: {
            name: "",
            gender: 1,
            about: ""
        },
        validate: {
            name: (value) => (
                    (value.length > 1 || value.length < profile.nameMax)
                    ? null : t(account.basic.form.name.validation, {char: profile.nameMax})
            ),
            about: (value) => (
                (value.length > 1 || value.length < profile.aboutMax)
                    ? null : t(account.basic.form.about.validation, {char: profile.aboutMax})
            ),
        }
    });

    // ---- Handle form submit ---- //
    const handleSubmit = (values: ProfileFormValues) => {
        setUpdating(true);
        /*
        updateProfile(values).then(
            () => {
                notifications.show({
                    color: "teal",
                    title: t(account.basic.form.success.title),
                    message: t(account.basic.form.success.sub)
                });
                setUpdating(false);
            }
        ).catch(
            error => {
                getLogger().error(error, "An error has occurred while updating profile data");
                notifications.show({
                    color: "red",
                    title: t(account.basic.form.error.submit.title),
                    message: t(account.basic.form.error.submit.sub)
                });
                setUpdating(false);
            }
        );
         */
    };

    return (
        <Skeleton visible={loading}>
            <form onSubmit={form.onSubmit(handleSubmit)} style={{width: "100%"}}>
                <Grid w="100%">

                    <Grid.Col span={{base: 12, md: 6}}>
                        <TextInput
                            label={t(account.basic.form.name.label)}
                            placeholder={t(account.basic.form.name.holder)}
                            tabIndex={1}
                            {...form.getInputProps("name")}
                        />
                    </Grid.Col>

                    <Grid.Col span={{base: 12, md: 6}}>
                        <Combobox
                            store={combobox}
                            onOptionSubmit={(gender: string) => {
                                form.setFieldValue("gender", (gender || "other"));
                                combobox.closeDropdown();
                            }}
                        >
                            <Combobox.Target>
                                <InputBase
                                    component="button"
                                    type="button"
                                    label={t(account.basic.form.name.label)}
                                    pointer
                                    tabIndex={2}
                                    rightSection={<Combobox.Chevron/>}
                                    rightSectionPointerEvents="none"
                                    onClick={() => combobox.toggleDropdown()}
                                    pos="relative"
                                >
                                    <Flex pos="absolute" top={5} left={15}>
                                        {t((user.genders[form.values.gender] as any)) ||
                                            <Input.Placeholder>{t(account.basic.form.gender.holder)}</Input.Placeholder>}
                                    </Flex>
                                </InputBase>
                            </Combobox.Target>

                            <Combobox.Dropdown>
                                {profile.genders.map((gender) =>
                                    <Combobox.Option
                                        key={gender.value}
                                        value={gender.value}
                                    >{t(gender.translation)}</Combobox.Option>
                                )}
                            </Combobox.Dropdown>
                        </Combobox>
                    </Grid.Col>

                    <Grid.Col span={12}>
                        <TextInput
                            label={t(account.basic.form.about.label)}
                            placeholder={t(account.basic.form.about.holder)}
                            tabIndex={3}
                            {...form.getInputProps("about")}
                        />
                    </Grid.Col>

                    <Grid.Col span={12}>
                        <Flex w="100%">
                            <Button
                                type="submit"
                                mt="sm"
                                tabIndex={4}
                                leftSection={<IconCloud/>}
                                loading={updating}
                            >
                                {t(account.basic.submit)}
                            </Button>
                        </Flex>
                    </Grid.Col>

                </Grid>
            </form>
        </Skeleton>
    );
};

export default PersonalForm;