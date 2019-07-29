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
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1564056018597_5896';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  const mysql = {
    client: {
      // host
      host: 'rm-uf639ey4ey24g20c6ao.mysql.rds.aliyuncs.com',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: 'gong8520@',
      // 数据库名
      database: 'users',
    },
    // clients: {
    //   // clientId, 获取client实例，需要通过 app.mysql.get('clientId') 获取
    //   db1: {
    //     // host
    //     host: 'rm-uf639ey4ey24g20c6ao.mysql.rds.aliyuncs.com',
    //     // 端口号
    //     port: '3306',
    //     // 用户名
    //     user: 'root',
    //     // 密码
    //     password: 'gong8520@',
    //     // 数据库名
    //     database: 'account_test',
    //   },
    //   db2: {
    //     // host
    //     host: 'rm-uf639ey4ey24g20c6ao.mysql.rds.aliyuncs.com',
    //     // 端口号
    //     port: '3306',
    //     // 用户名
    //     user: 'root',
    //     // 密码
    //     password: 'gong8520@',
    //     // 数据库名
    //     database: 'product',
    //   },
    //   // ...
    // },
    // 所有数据库配置的默认值
    default: {},

    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };

  return {
    ...config,
    ...userConfig,
    mysql,
  };
};
