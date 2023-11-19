import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  type: 'module',
  extensions: ['js', 'jsx', 'ts', 'tsx'],
} as Config.InitialOptions;

export default config;
