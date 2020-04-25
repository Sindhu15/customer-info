const KoaRouter = require('koa-router')
const router = new KoaRouter(); 

router.get('/health', (ctx) => {
    ctx.body = "Up and running"
});

module.exports = {
    router
};