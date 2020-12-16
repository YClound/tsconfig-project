const { merge } = require('webpack-merge');
const common = require('./index');

module.exports = merge(common, {
  mode: 'production',
})