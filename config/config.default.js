/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1572279827547_7203';

  // add your middleware config here
  config.middleware = [];

  config.view = {
    mapping: {
      '.html': 'arttemplate',
    },
  };

  config.arttemplate = {
    escape: true,
    debug: false,
    bail: true,
    cache: true,
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      // host: 'localhost',
      host: '139.199.4.156',
      // 端口号
      port: '3306',
      // 用户名
      user: 'resource',
      // user: 'root',
      // 密码
      password: 'NTDkGRx6SxX6fR5a',
      // 数据库名
      database: 'resource',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };


  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1511005864199_129';

  // add your config here
  config.wechat_config = {
    token: 'samueltalk',
    appid: 'wxc935aa3f8df2e449',
    encodingAESKey: 'y1QbWfU9FHwYzcMmZbhn4xvX0ONrx5xR1E8l4XJ8kHh',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
