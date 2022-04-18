module.exports = {
  // Failed to resolve component: ion-icon If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: tag => tag.startsWith('ion-'),
        };
        return options;
      });
  },
};
