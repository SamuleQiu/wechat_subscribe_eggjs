'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/product', controller.product.index);
  router.get('/product/detail', controller.product.detail);
  router.get('/resource/music/:id', controller.resource.music);


  // 微信消息
  const wechat = app.middlewares.wechat({
    token: 'samueltalk',
    appid: 'wxc935aa3f8df2e449',
    encodingAESKey: 'y1QbWfU9FHwYzcMmZbhn4xvX0ONrx5xR1E8l4XJ8kHh',
  });
  router.get('/wechat', wechat);
  router.post('/wechat', wechat);
};
