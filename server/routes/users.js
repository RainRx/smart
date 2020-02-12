const DB = require('../controllers/mysqlConfig')


const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/login', async (ctx, next) => {
  var obj = ctx.query
  
  var res = await DB.findUserData(obj.stuId)
  console.log(res)
  if (res.length === 0) {
    ctx.fail(302, "学号未注册")
  } else if (res[0].pass !== obj.pass) {
    ctx.fail(303, "密码错误")
  } else {
    var name = res[0].name
    ctx.success({
      name
    })
  }
})

router.post('/register', async (ctx, next) => {
  var obj = ctx.request.body

  var params = [obj.stuId, obj.name, obj.pass]
  // 判断该学号是否已注册
  var res = await DB.findUserData(obj.stuId)
  if (res.length) {
    console.log(res)
    ctx.fail(301, "该学号已注册")
  } else {
    await DB.addUserData(params)
    ctx.success({})
  }
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
