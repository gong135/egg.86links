'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const client = await this.app.mysql.get('agent', { limit: 10, offset: 0 });

    // 279912965506072580  分页查询
    // limit 就是 size , page =1 ;
    // 第一页 offset = 0, 第二页就是page =2,  offset  =  offset + size*page;
    const user = await this.app.mysql.select('agent', {
    // 搜索 user 表
      // where: { status: 'draft', author: [ 'author1', 'author2' ] }, // WHERE 条件
      // columns: [ 'account' ], // 要查询的表字段
      orders: 'id', // 排序方式
      limit: 10, // 返回数据量
      offset: 0, // 数据偏移量 可以用这个做分页
    });
    this.ctx.body = user;
  }
}

module.exports = HomeController;
