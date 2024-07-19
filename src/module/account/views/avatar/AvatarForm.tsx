import {Avatar, Box, Button, FileInput, Flex, Text, Title} from "@mantine/core";
import {useRef, useState} from "react";
import {IconUpload} from "@tabler/icons-react";
import {useTranslations} from "next-intl";
import {account} from "@/common/config/translation";
import styles from "./AvatarForm.module.css";

const AvatarForm = () => {
    const [value, setValue] = useState<File | null>(null);
    const ref = useRef<HTMLButtonElement>(null);
    const t = useTranslations();

    return (
        <Flex className={styles.box}>
            <Avatar size={64} src={value ? URL.createObjectURL(value) : undefined} />
            <Box my="lg">
                <Title className={styles.title}>{t(account.basic.avatar.title)}</Title>
                <Text className={styles.sub}>{t(account.basic.avatar.receive, { quantity: "3MB" })}</Text>
            </Box>
            <Button
                leftSection={<IconUpload />}
                onClick={() => {ref.current!.click();}}
            >
                {t(account.basic.avatar.upload)}
            </Button>
            <FileInput
                label="Input label"
                description="Input description"
                placeholder="Input placeholder"
                display="none"
                onChange={setValue}
                ref={ref}
            />
        </Flex>
    );
};

export default AvatarForm;
