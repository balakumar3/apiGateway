const express = require('express');
const handleProxyRequest = require('../controller/proxyController');
require('dotenv').config();

const orderRouter = express.Router();

orderRouter.use((req, res, next) => {
    console.log(`Request received in orderRouter: ${req.method} ${req.originalUrl}`);
    next();
});

orderRouter.get('/order', handleProxyRequest);
orderRouter.patch('/order', handleProxyRequest);

module.exports = orderRouter;
