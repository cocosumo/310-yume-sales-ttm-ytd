
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePaths: ["node_modules", "<rootDir>/src"],
  // ModuleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  globals: {
    kintone: undefined
  },
  setupFiles: ["dotenv/config"]
};