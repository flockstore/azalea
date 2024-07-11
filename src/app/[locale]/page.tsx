"use client";

import {Text} from "@mantine/core";
import {useState} from "react";

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