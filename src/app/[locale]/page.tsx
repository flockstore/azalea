"use client";

import {Box, Text} from "@mantine/core";
import {useEffect, useState} from "react";
import {getUser} from "@/provider/appwrite.provider";

const Home = () => {

    const [user, setUser] = useState({} as any);



    return (
        <div>
            <Text
            >{JSON.stringify(user)}</Text>
        </div>
    );

};

export default Home;