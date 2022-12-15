const { mergeConfig } = require('vite');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    /**
     * @inner
     * 현재 애드온에 대한 빌드 에러가 발생합니다.
     * 
     * @see
     * https://github.com/chakra-ui/chakra-ui/issues/6433
     */
    // "@chakra-ui/storybook-addon",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true,
    "emotionAlias": false,
  },

  /**
   * @see: https://chakra-ui.com/getting-started/with-storybook#troubleshooting-storybook
   */
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      module: {
        rules: [
          {
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
          }
        ]
      }
    });
  },
}
