'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const client = await this.app.mysql.get('db1');
    // const user = await client.query('users');
    const user = await this.app.mysql.query('select * from users', '');
    console.log(user);
    this.ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
