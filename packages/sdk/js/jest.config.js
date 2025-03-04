module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: false,
  coverageDirectory: './test/coverage',
  coverageReporters: ['json', 'html', 'lcov'],
  collectCoverageFrom: [
    './src/**/*.{js,ts}',
    './src/**/*.unit.test.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/vendor/**',
  ],
  setupFiles: ["dotenv/config"],
  modulePathIgnorePatterns: ["./examples/*"]
}