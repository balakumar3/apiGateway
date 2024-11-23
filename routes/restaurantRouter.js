const express = require('express');
const handleProxyRequest = require('../controller/proxyController');
require('dotenv').config();

const restaurantRouter = express.Router();

restaurantRouter.use((req, res, next) => {
    console.log(`Request received in restaurantRouter: ${req.method} ${req.originalUrl}`);
    next();
});

restaurantRouter.get('/restaurant', handleProxyRequest);
restaurantRouter.patch('/restaurant', handleProxyRequest);

module.exports = restaurantRouter;
