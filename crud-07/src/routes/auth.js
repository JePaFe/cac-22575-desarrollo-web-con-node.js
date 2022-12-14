const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");

const connection = require("../models/connection");

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", (req, res) => {
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    req.body.email,
    (error, results) => {
      if (error) {
        throw error;
      }

      if (!results.length) {
        res.send("El usuario y/o contraseña son incorrectos");
      } else {
        const user = results.shift();
        if (!bcryptjs.compareSync(req.body.password, user.password)) {
          res.send("El usuario y/o contraseña son incorrectos");
        } else {
          req.session.userId = user.id;

          res.redirect("/");
        }
      }
    }
  );
});

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", async (req, res) => {
  const hash = await bcryptjs.hash(req.body.password, 8);
  //   res.send(req.body);
  //   connection.query("INSERT INTO users (email, password) value('" + connection.escape(req.body.email) + "')", (error, results) => {
  connection.query(
    "INSERT INTO users SET ?",
    {
      ...req.body,
      password: hash,
    },
    (error, results) => {
      if (error) {
        throw error;
      }

      res.redirect("/");
    }
  );
});

router.get("/logout", (req, res) => {
  //   req.session.destroy(() => {
  //     res.redirect("/");
  //   });

  req.session = null;
  res.redirect("/");
});

module.exports = router;
