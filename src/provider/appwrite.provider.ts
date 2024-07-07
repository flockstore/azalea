import { Client, Account } from "appwrite";
import {appWrite} from "@/config/app";

export const client = new Client();

client
    .setEndpoint(appWrite.endpoint!)
    .setProject(appWrite.app!);

export { ID } from "appwrite";
