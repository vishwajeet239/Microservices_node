const CustomerService = require('../services/customer-service.js');

module.exports = (app) =>{
    const service = new CustomerService();

    app.use('/app-events', async (req, res, next) =>{
        const {payload}= req.body;
        service.SubscribeEvents(payload);

        console.log("=========== Customer service received event ==========");
        return res.status(200).json(payload);
    });


}