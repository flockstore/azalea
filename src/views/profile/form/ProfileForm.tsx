import {useForm} from "@mantine/form";
import {Box, Button, Flex, Grid, TextInput} from "@mantine/core";

export interface ProfileFormValues {
    name: string;
    email: string;
}

const ProfileForm = () => {

    const form = useForm<ProfileFormValues>({
        initialValues: {
            name: "",
            email: ""
        },
        validate: {
            name: (value) => (value.length > 0 ? null : "Name is required"),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
        }
    });

    const handleSubmit = (values: ProfileFormValues) => {
        console.log(values);
    };

    return (
        <form onSubmit={form.onSubmit(handleSubmit)} style={{width: "100%"}}>
            <Grid w="100%">

                <Grid.Col span={{base: 12, md: 6}}>
                    <TextInput
                        label="Name"
                        placeholder="Your name"
                        tabIndex={1}
                        {...form.getInputProps("name")}
                    />
                    <Button type="submit" mt="sm">
                        Submit
                    </Button>
                </Grid.Col>

                <Grid.Col span={{base: 12, md: 6}}>
                    <TextInput
                        label="Email"
                        placeholder="your@email.com"
                        tabIndex={2}
                        {...form.getInputProps("email")}
                    />
                </Grid.Col>

            </Grid>
        </form>
    );
};

export default ProfileForm;