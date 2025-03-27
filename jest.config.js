const nextJest = require("next/jest");

const createJestConfig = nextJest({
    dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
    // testEnvironment: "jest-environment-jsdom", // Use jsdom for React components
    moduleNameMapper: {
        // Handle module aliases (from tsconfig or webpack)
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    collectCoverage: true, // Enable test coverage
    coverageDirectory: "coverage",
    coverageReporters: ["json", "lcov", "text", "clover"],
};

module.exports = createJestConfig(customJestConfig);
