// export default {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
//   setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
// };

import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  type: 'module', // You can remove this line if it's not necessary
  extensions: ['js', 'jsx', 'ts', 'tsx'],
} as Config.InitialOptions;

export default config;
