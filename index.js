const express = require("express");
const app = express();

app.listen(3000, console.log("サーバが開始"));

app.get("/", (req, res) => {
  res.send("ようこそ");
});
