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

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
  };

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

  // 覆盖egg自带的配置 使支持接收xml参数
  config.bodyParser = {
    enable: true,
    encoding: 'utf8',
    formLimit: '100kb',
    jsonLimit: '100kb',
    strict: true,
    // @see https://github.com/hapijs/qs/blob/master/lib/parse.js#L8 for more options
    queryString: {
      arrayLimit: 100,
      depth: 5,
      parameterLimit: 1000,
    },
    enableTypes: [ 'json', 'form', 'text' ],
    extendTypes: {
      text: [ 'text/xml', 'application/xml' ],
    },
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
    // token: 'samueltalk',
    // appid: 'wxc935aa3f8df2e449',
    // encodingAESKey: 'y1QbWfU9FHwYzcMmZbhn4xvX0ONrx5xR1E8l4XJ8kHh',
    token: 'samueltalk',
    appid: 'wxc935aa3f8df2e449',
    // encodingAESKey: 'y1QbWfU9FHwYzcMmZbhn4xvX0ONrx5xR1E8l4XJ8kHh',
  };

  config.cluster = {
    listen: {
      port: 3000,
      hostname: '127.0.0.1', // 不建议设置 hostname 为 '0.0.0.0'，它将允许来自外部网络和来源的连接，请在知晓风险的情况下使用
      // path: '/var/run/egg.sock',
    },
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
