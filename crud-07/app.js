const express = require("express");
const app = express();
const methodOverride = require("method-override");
require("dotenv").config();

// const session = require("express-session");
// app.use(
//   session({
//     secret: "S3cr3t0!",
//     resave: false,
//     saveUninitialized: true,
//     // cookie: { secure: true }
//   })
// );

const cookie = require("cookie-session");
app.use(
  cookie({
    name: "session",
    keys: ["S3cr3t0!"],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "src/views");

const connection = require("./src/models/connection");

app.get("/", (req, res) => {
  console.log(req.session.userId);

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

const isLogin = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect("/login");
  }

  next();
};

app.use("/noticias", isLogin, require("./src/routes/noticias"));
app.use(require("./src/routes/contacto"));
app.use(require("./src/routes/auth"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
