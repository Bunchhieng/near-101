const { ProvidePlugin } = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    buffer: require.resolve('buffer'),
    assert: require.resolve('assert'),
  };

  config.plugins.push(
    new ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      // process: 'process/browser',
    }),
  );

  return config;
};
