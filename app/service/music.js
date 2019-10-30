'use strict';

const Service = require('egg').Service;

class MusicService extends Service {
  async index(id) {
    const music = await this.app.mysql.select('music', { id });
    return music;
  }
}

module.exports = MusicService;
