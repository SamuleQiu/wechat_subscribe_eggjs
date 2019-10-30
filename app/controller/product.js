'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.product.index();
    ctx.body = res;
  }

  async detail() {
    const { ctx } = this;
    ctx.body = 'hi, info';
  }
}

module.exports = ProductController;
