const express = require("express");
const app = express();
app.use(express.json()); //postする際にjsonを用いる設定

app.listen(3000, console.log("サーバが開始"));

app.get("/", (req, res) => {
  res.send("ようこそ");
});

//お客様情報をサーバにおいておく
const customers = [
  { title: "田中", id: 1 },
  { title: "中川", id: 2 },
  { title: "森本", id: 3 },
  { title: "冨田", id: 4 },
  { title: "張本", id: 5 },
];

//CRUD
//データを取得してみる(GET)
app.get("/api/customers", (req, res) => {
  res.send(customers);
});

app.get("/api/customers/:id", (req, res) => {
  const customer = customers.find((C) => C.id === parseInt(req.params.id));
  res.send(customer);
});

// データを送信(POST)してみる
app.post("/api/customers", (req, res) => {
  const customer = {
    title: req.body.title,
    id: customers.length + 1,
  };
  customers.push(customer);
  res.send(customers);
});

//データを更新してみる(PUT)
app.put("/api/customers/:id", (req, res) => {
  const customer = customers.find((C) => C.id === parseInt(req.params.id));
  customer.title = req.body.title;
  res.send(customers);
});

//データを削除してみる(DELETE)
app.delete("/api/customers/:id", (req, res) => {
  const customer = customers.find((C) => C.id === parseInt(req.params.id));
  const index = customers.indexOf(customer);
  customers.splice(index, 1); //削除
  res.send(customers);
});
