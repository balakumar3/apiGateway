const express = require('express');
const handleProxyRequest = require('../controller/proxyController');
require('dotenv').config();

const userRouter = express.Router();

userRouter.use((req, res, next) => {
    console.log(`Request received in userRouter: ${req.method} ${req.originalUrl}`);
    next();
});

userRouter.get('/users', handleProxyRequest);
userRouter.patch('/users', handleProxyRequest);

module.exports = userRouter;
