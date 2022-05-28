export default {
    setupFilesAfterEnv: ["./jest.setup.ts"], // the setup file name can be anything, just import the same here
    testEnvironment: "jsdom",
    moduleDirectories: ["node_modules", "<rootDir>"],
}