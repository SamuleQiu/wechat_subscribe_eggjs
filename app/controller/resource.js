'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async music() {
    const { ctx } = this;
    const { id } = ctx.params;
    const data = await ctx.service.music.index(id);
    ctx.body = {
      errCode: 200,
      errMsg: '',
      data,
    };
    if (!data) {
      ctx.body = {
        errCode: 500,
        errMsg: '服务器错误',
        data,
      };
    }
  }

  //   错误码方案分享给大家：
  // 统一格式：A-BB-CCC
  // A:错误级别，如1代表系统级错误，2代表服务级错误；
  // B:项目或模块名称，一般公司不会超过99个项目；
  // C:具体错误编号，自增即可，一个项目999种错误应该够用；

}

module.exports = ProductController;
