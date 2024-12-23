const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer();

// Function to handle proxying the request
const handleOrderProxyRequest = (req, res) => {
    const targetUrl = process.env.ORDER_SERVICE_URL;


    // Construct the full target URL with query parameters
    const url = new URL(targetUrl);
    Object.keys(req.query).forEach((key) => {
        url.searchParams.append(key, req.query[key]);
    });
    // Attach the body to the proxy request
    req.on('data', (chunk) => {
        req.body = JSON.parse(chunk.toString());
    });

    // Forward the request to the target service
    proxy.web(req, res, { target: targetUrl, changeOrigin: true }, (err) => {
        console.error('Proxy error:', err.message);
        if (!res.headersSent) {
            res.status(500).json({ message: 'Internal Server Error in Proxy' });
        }
    });

    proxy.once('proxyReq', (proxyReq) => {
        console.log('Proxying request to:', targetUrl);

        // Add the body to the proxy request
        if (req.body) {
            const bodyData = JSON.stringify(req.body);
            proxyReq.setHeader('Content-Type', 'application/json');
            proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
            proxyReq.write(bodyData);
        }
    });

    proxy.once('proxyRes', (proxyRes) => {
        console.log('Response received from target:', proxyRes.statusCode);
    });
}

module.exports = handleOrderProxyRequest;
