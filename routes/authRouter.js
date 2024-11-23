const express = require('express');
const httpProxy = require('http-proxy');
const handleProxyRequest = require('../controller/proxyController');
require('dotenv').config();

const authRouter = express.Router();


authRouter.use((req, res, next) => {
    console.log(`Request received in authRouter: ${req.method} ${req.originalUrl}`);
    next();
});

authRouter.post('/auth/register', handleProxyRequest);
authRouter.post('/auth/login', handleProxyRequest);
authRouter.post('/auth/logout', handleProxyRequest);
authRouter.get('/auth/validateToken', handleProxyRequest);

module.exports = authRouter;
