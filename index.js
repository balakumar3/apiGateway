const express = require('express');

require('dotenv').config();

const app = express();
const authRouter = require('./routes/authRouter.js');
const userRouter = require('./routes/userRouter.js');

app.use(express.json());

app.use('/', authRouter);
app.use('/', userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});