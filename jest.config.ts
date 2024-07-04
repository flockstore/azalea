import nextJest from "next/jest.js";
import {Config} from "@jest/types";

const createJestConfig = nextJest({
    dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config.InitialOptions = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts", "<rootDir>/src/test/common.tsx", "<rootDir>/src/test/mocks.tsx"],
    coveragePathIgnorePatterns: [
        "/node_modules/",
        ".*test-util\\.(jsx?|tsx?)$"
    ],
    moduleNameMapper: {
        "\\.(scss|sass|css)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/src/$1",
    },
};

export default createJestConfig(config);