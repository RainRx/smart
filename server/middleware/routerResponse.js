const routerResponse = (option={}) => {
    return async (ctx, next) => {
        ctx.success = function(data){
            ctx.type = option.type || 'json'
            ctx.body = {
                code: option.code || 200,
                msg: option.successMsg || 'success',
                data:data
            }
        }

        ctx.fail = function(code, msg){
            ctx.type = option.type || 'json'
            ctx.body = {
                code: code || option.code || 99,
                msg: msg || option.failMsg || 'fail'
            }
        }

        await next();
    }
}

module.exports = routerResponse