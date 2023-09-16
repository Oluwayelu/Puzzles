const path = require("path");

module.exports = {
  testEnvironment: "jest-environment-json",
  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect",
    path.join(__dirname, "src/test/setup"),
  ],
  resetMocks: true,
  moduleDirectories: ["node_modules", path.join(__dirname, "src")],
  watchPlugins: [
    "jest-watch-typehead/filename",
    "jest-watch-typehead/testname",
    "jest-watch-select-projects",
  ],
};
