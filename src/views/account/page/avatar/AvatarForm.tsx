import {Avatar, Box, Button, FileInput, Flex, Text, Title} from "@mantine/core";
import {useRef, useState} from "react";
import {IconUpload} from "@tabler/icons-react";
import {useTranslations} from "next-intl";
import {account} from "@/config/translation";
import styles from "./AvatarForm.module.css";

const AvatarForm = () => {
    const [value, setValue] = useState<File | null>(null);
    const t = useTranslations();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (file: File | null) => {
        setValue(file);
        console.log(file);
    };

    return (
        <Flex className={styles.box}>
            <Avatar size={64} src={value ? URL.createObjectURL(value) : undefined} />
            <Box my="lg">
                <Title className={styles.title}>{t(account.basic.avatar.title)}</Title>
                <Text className={styles.sub}>{t(account.basic.avatar.receive, { quantity: "3MB" })}</Text>
            </Box>
            <Button
                leftSection={<IconUpload />}
                onClick={handleButtonClick}
            >
                {t(account.basic.avatar.upload)}
            </Button>
            <FileInput
                ref={fileInputRef}
                accept="image/*"
                onChange={(event: any) => handleFileChange(event.currentTarget.files?.[0] || null)}
                style={{ display: "none" }}
            />
        </Flex>
    );
};

export default AvatarForm;
