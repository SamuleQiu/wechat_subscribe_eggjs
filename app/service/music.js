'use strict';

const Service = require('egg').Service;

class MusicService extends Service {
  async index(id) {
    const favorite = await this.app.mysql.select('favorite', { id });
    return favorite;
  }
}

module.exports = MusicService;
