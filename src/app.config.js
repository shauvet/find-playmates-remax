/*
 * @Date: 2019-09-22 23:32:18
 * @LastEditors  : guangling
 * @LastEditTime : 2020-01-04 13:10:47
 */
const title = '小程序标题';
const bgColor = '#fff';
const backgroundColor = '#ddd'
const pages = ['pages/index/index'];
// 微信
exports.wechat = {
  pages: ['pages/wechat/index', ...pages],
  window: {
    navigationBarTitleText: title,
    navigationBarBackgroundColor: bgColor,
  },
};
// 支付宝
exports.alipay = {
  pages: ['pages/alipay/index', ...pages],
  window: {
    defaultTitle: 'Alipay Todo App',
    titleBarColor: backgroundColor,
  },
};
// 头条
exports.toutiao = {
  pages: ['pages/toutiao/index', ...pages],
  window: {
    defaultTitle: 'Toutiao Todo App',
    titleBarColor: backgroundColor,
  },
};