const express = require("express");
const path = require("path");
const pathDir = require("../util/path");
const router = express.Router();
const products = [];
//     /admin/add-product
router.get("/add-product", (req, res, next) => {
  res.render("add-product", { docTitle: "add Product", path: "/add-product" });
  //   res.send(
  //     "<form action='/product' method='POST'><input type='text' name='title'/><button type='submit'>Add Product</button></form>"
  //   );
  // res.sendFile(path.join(pathDir, "views", "add-product.html"));
});
//   /admin/product
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  console.log(req.body);
  res.redirect("/");
});
exports.routes = router;
exports.products = products;
