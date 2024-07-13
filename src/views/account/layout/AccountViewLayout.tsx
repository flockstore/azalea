"use client";

import {Flex, Grid} from "@mantine/core";
import DropMenu from "@/components/drop-menu/DropMenu";
import {ReactNode} from "react";
import {useMediaQuery} from "@mantine/hooks";

/**
 * Defines the component props.
 */
type Props = {
    children: ReactNode;
};

const AccountViewLayout = ({children}: Props) => {

    const large = useMediaQuery("(min-width: 992px)") ?? false;

    return (
        <Grid w="100%">

            <Grid.Col span={{base: 12, md: 3}} h="100%">
                <Flex>
                    <DropMenu
                        slug="Mi perfil"
                        responsive={!large}
                        maxHeight="550px"
                    >
                        xd
                    </DropMenu>
                </Flex>
            </Grid.Col>

            <Grid.Col span={{base: 12, md: 9}}>
                {children}
            </Grid.Col>

        </Grid>
    );

};

export default AccountViewLayout;