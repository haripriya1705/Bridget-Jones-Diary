const express = require('express');
const cors = require('cors');

const logRoutes = require('./logger');
// const postRouter = require('./routers/post');
const userRouter = require('./routers/userRouter');

const api = express();

api.use(cors());
api.use(express.json());
api.use(logRoutes);

api.get("/", (req, res) => {
    res.json({
        name: "Diary",
        description: "Store you secrets in complete confidentiality."
    })
})

api.use("/users", userRouter);

module.exports = api;