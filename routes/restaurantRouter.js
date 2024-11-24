const express = require('express');
const handleProxyRequest = require('../controller/proxyController');
require('dotenv').config();

const restaurantRouter = express.Router();

restaurantRouter.use((req, res, next) => {
    console.log(`Request received in restaurantRouter: ${req.method} ${req.originalUrl}`);
    next();
});

restaurantRouter.get('/restaurant/:id', handleProxyRequest);
restaurantRouter.get('/restaurant?restaurantName=', handleProxyRequest);
restaurantRouter.post('/restaurant/:id/updateRestaurant', handleProxyRequest);
restaurantRouter.post('/restaurant/:id/updateRestaurantOrder', handleProxyRequest);
restaurantRouter.post('/menuItem/:id/updatemenuitem', handleProxyRequest);
restaurantRouter.get('/menuItem/:id', handleProxyRequest);

module.exports = restaurantRouter;
