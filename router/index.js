const express = require("express");

const router = express.Router();
router.get("/posts", (req, res, next) => {
  res.json({
    posts: [{ test: "1", test1: "2" }],
  });
});
// router.post("/posts", (req, res, next) => {});
// router.delete("/posts", (req, res, next) => {});

module.exports = {
  router,
};
