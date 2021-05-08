const Koa = require('koa')
const path = require('path')
const route = require('koa-route')
const static = require('koa-static')
const fs = require('fs')
const app = new Koa()
const main = ctx => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./dist/index.html');
};
const staticPath = './dist'
app.use(route.get('/', main));
app.use(static(
  path.join( __dirname,  staticPath)
))

app.listen(8080)