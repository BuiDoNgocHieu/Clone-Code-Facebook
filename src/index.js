const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const dbConfig = require("./configs/database.config");
const router = require("./routers/routers");

const app = express();

app.use(bodyParser.json());

mongoose
    .connect(dbConfig.URL_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connected to the database");
    })
    .catch((error) => {
        console.log(error);
        process.exit();
    });

app.use("/", router);


app.listen(dbConfig.PORT, () => {
    console.log(`server started at port ${dbConfig.PORT}`);
});
