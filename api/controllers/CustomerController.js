const models = require("@models");
class CustomerController{
    async getCustomers(ctx){
        const customers = await models.customers.findAll(
            {
                attributes: { exclude: ['createdAt','updatedAt'] }
            }
        );
        ctx.body = customers;
    }

    async getCustomerAddresses(ctx){
        const {customerId} = ctx.params;

        const addresses = await models.customer_addresses.findAll({
            where:{
                customerId: Number(customerId)
            },
            attributes: { exclude: ['createdAt','updatedAt'] },
            raw: true
        });

        ctx.body= addresses;
    }
}

module.exports = new CustomerController();