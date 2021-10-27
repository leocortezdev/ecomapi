const express = require("express");
const app = express();

const userRouter = require("./routes/users");

app.use("/api/users", userRouter);

module.exports = {
    app,
}