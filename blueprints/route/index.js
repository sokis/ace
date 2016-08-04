var utils = require('../../lib/text-helper');

module.exports = {
  description() {
    return '创建路由。';
  },
  fileMapTokens() {
    return {
      __module__: (options) => utils.normalizeCasing(options.entity.name, 'dashes')
    };
  }
};
