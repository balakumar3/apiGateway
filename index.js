const express = require('express');

require('dotenv').config();

const app = express();
const authRouter = require('./routes/authRouter.js');
const userRouter = require('./routes/userRouter.js');
const restaurantRouter = require('./routes/restaurantRouter.js');
const orderRouter = require('./routes/orderRouter.js');

app.use(express.json());

app.use('/', authRouter);
app.use('/', userRouter);
app.use('/', restaurantRouter);
app.use('/', orderRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});