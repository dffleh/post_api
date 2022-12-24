const express = require("express");
const { router } = require("./router/index");

const app = express();

app.use("/", router);

// app.use("/", (req, res, next) => {
//   console.log("====================================");
//   console.log("hello from middlware two");
//   console.log("====================================");
//   res.json({ test: "hello" });
// });

module.exports = {
  app,
};
