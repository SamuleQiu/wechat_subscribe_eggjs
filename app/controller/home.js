'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    await ctx.render('index.html', {
      lists: [ 1, 2, 3, 4 ],
    });
  }
}

module.exports = HomeController;
