const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", (req, res, next) => {
  next();
});
app.use("/admin", adminData.routes);
app.use(shopRoutes);
console.log(process.mainModule.filename);
app.use((req, res, next) => {
  res.render("404", { docTitle: "Not Found Page" });
  // res.sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(5000);
