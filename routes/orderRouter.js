const express = require('express');
const handleProxyRequest = require('../controller/proxyOrderController');
require('dotenv').config();

const orderRouter = express.Router();

orderRouter.use((req, res, next) => {
    console.log(`Request received in orderRouter: ${req.method} ${req.originalUrl}`);
    next();
});

orderRouter.post('/orders', handleProxyRequest);
orderRouter.get('/orders/:id', handleProxyRequest);
orderRouter.post('/orders/:id/updateOrder', handleProxyRequest);

module.exports = orderRouter;
