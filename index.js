const express = require("express");
const { Connection } = require("./database/db.js");
const dotenv = require("dotenv");
const UserRouter = require("./routes/user-route.js"); 
const cors = require("cors");
const bodyParser = require("body-parser");
const ArticleRouter = require("./routes/article-route.js");

const app= express();

dotenv.config();

app.use(express.json());

app.use(bodyParser.json({
    extended: true
  }));
app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(cors());
app.use('/',UserRouter);
app.use('/',ArticleRouter);

const username = process.env.DB_USER;
const password = process.env.DB_PASS;
Connection(username, password);


app.listen(process.env.PORT ||3000, function() {
  console.log("Server is up and running on port 3000");
});
