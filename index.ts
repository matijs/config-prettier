import { type Config }  from 'prettier';

/** Prettier configuration */
const config: Config  = {
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: ['*.css', '*.yml', '*.scss'],
      options: {
        singleQuote: false,
      },
    },
  ],
};

export default config;
