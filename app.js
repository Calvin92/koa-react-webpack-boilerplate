const Koa = require('koa')
const app = new Koa()
const path = require('path')
const serve = require('koa-static')
// const render = require('koa-ejs')
const router = require('./server/router')

// render(app, {
// 	root: path.join(__dirname, 'view'),
// 	layout: false,
// 	viewExt: 'ejs',
// 	cache: false,
// 	debug: true,
// })

app.use(serve('./public'))

app.use(router.routes())
	.use(router.allowedMethods())

const port = 3009
app.listen(port)

console.log('Server已经启动，监听端口：' + port)
