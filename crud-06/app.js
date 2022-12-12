const express = require("express");
const app = express();
const methodOverride = require("method-override");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(express.static("public"));

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
      res.render("index", { results });
    }
  );
});

app.use("/noticias", require("./src/routes/noticias"));
app.use(require("./src/routes/contacto"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
