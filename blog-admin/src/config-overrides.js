const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require('customize-cra');

module.exports = function override(config, env) {
  return config;
}

module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true
  })
)