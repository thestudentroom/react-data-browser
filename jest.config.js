const ignores = [
  '/node_modules/',
  '/fixtures/',
  '/__tests__/helpers/',
  '__mocks__',
  '__stories__',
];

module.exports = {
  testPathIgnorePatterns: [...ignores],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  coveragePathIgnorePatterns: [...ignores],
  coverageThreshold: {
    global: {
      branches: 30,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};
