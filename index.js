const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/integration/zabbix", (req, res) => {
  console.log("Body", req.body);
  console.log("Query", req.query);
  return res.status(200).json({ message: "ok" });
});

app.listen(3001);
