//backend entry file

// "module-alias/register" package lets us define the name for relative path
//eg: ./../dirname can be defined as @dirname. We define this in the package.json 
require('module-alias/register')

const Koa = require('koa');
const cors = require('koa-cors');

const app = new Koa();


const genericRoutes = require("@routers/genericRoutes");
const customerRoutes = require("@routers/customerRoutes");
const errorHandler = require("@utils/ErrorHandlers");

app.use(cors());
app.use(errorHandler);

app
    .use(customerRoutes.router.routes())
    .use(genericRoutes.router.routes());

 
app.listen(3010);

console.log('listening')