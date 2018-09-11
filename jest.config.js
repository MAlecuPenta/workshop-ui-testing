module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['lib/**/*.{js,jsx}'],
    coveragePathIgnorePatterns: [
        'assets', 'node_modules'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['lcov'],
    testMatch: ['**/test/**/*.test.js'],
    testPathIgnorePatterns: ['mocks'],
    setupFiles: ['<rootDir>/test/jestSetup.js']
};
