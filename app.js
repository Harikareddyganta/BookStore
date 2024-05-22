const express = require("express");
const mongoose = require("mongoose");
const app = express();

const router = require("./routes/book-routes");
const mongoDBURI =
  "mongodb+srv://admin:admin@bookstore.m7yut9a.mongodb.net/mydb?retryWrites=true&w=majority&appName=BookStore";
const cors = require("cors");
//middle-ware

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.use("/books", router);

mongoose
  .connect(mongoDBURI)
  .then(() => {
    console.log("Db connected");
  })
  .then(() => {
    app.listen(5000, (error) => {
      if (!error) {
        console.log(
          "Server is Successfully Running, and App is listening on port " + 5000
        );
      } else console.log("Error occurred, server can't start", error);
    });
  });
