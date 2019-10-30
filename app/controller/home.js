'use strict';

const Controller = require('egg').Controller;
const sha1 = require('sha1');

class HomeController extends Controller {
  async index() {
    const obj = this.ctx.query;
    const token = this.ctx.app.config.wechat_config.token,
      timestamp = obj.timestamp,
      nonce = obj.nonce,
      echostr = obj.echostr,
      signature = obj.signature,
      str = [ token, timestamp, nonce ].sort().join(''),
      sha = sha1(str);
    if (sha === signature) {
      this.ctx.body = echostr + '';
    } else {
      this.ctx.body = 'config fail';
    }
  }
  async static() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    await ctx.render('index.html', {
      lists: [ 1, 2, 3, 4 ],
    });
  }
}

module.exports = HomeController;

