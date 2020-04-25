
class CustomerController{
    async getCustomers(ctx){
        ctx.body = "Customers";
    }

    async getCustomerAddresses(ctx){
        const {customerId} = ctx.params;

        ctx.body=customerId +"address";
    }
}

module.exports = new CustomerController();