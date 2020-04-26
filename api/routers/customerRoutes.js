const KoaRouter = require('koa-router')
const router = new KoaRouter(); 

const CustomerController = require("@controllers/CustomerController");

router.get('/customers', (ctx) => {
    return CustomerController.getCustomers(ctx);
});

router.get('/customer/:customerId/addresses', (ctx) => {
    return CustomerController.getCustomerAddresses(ctx);
});

module.exports = {
    router
};
  