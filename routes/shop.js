const express = require("express");
const path = require("path");
const adminData = require("./admin");
const pathDir = require("../util/path");
const router = express.Router();
router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: "Shop", path: "/" });
  // console.log("shop.js", adminData.products);
  // res.sendFile(path.join(pathDir, "views", "shop.html"));
});
module.exports = router;
