const express = require("express");
const app = express();
const methodOverride = require("method-override");
require("dotenv").config();

app.use(express.urlencoded());
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", "src/views");

const connection = require("./src/models/connection");

app.get("/", (req, res) => {
  connection.query(
    "SELECT * FROM productos WHERE id = ?",
    2,
    (error, results) => {
      if (error) {
        throw error;
      }

      console.log(results);
    }
  );
  res.render("index");
});

app.use("/noticias", require("./src/routes/noticias"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
