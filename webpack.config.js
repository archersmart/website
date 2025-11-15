// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css',
  }]);

  webpackConfig.resolve = webpackConfig.resolve || {};
  webpackConfig.resolve.alias = Object.assign({}, webpackConfig.resolve.alias || {}, {
    'tween-one/es': 'tween-one/lib',
  });

  // Tailwind 集成改为使用 CLI 预构建，不在 webpack 中加载 postcss 插件

  return webpackConfig;
};
