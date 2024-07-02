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
        "\\.(css|less|sass|scss)$": "identity-obj-proxy",
        "^@/(.*)$": "<rootDir>/src/$1",
    },
};

export default createJestConfig(config);