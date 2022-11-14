const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/personajes", (req, res) => {
  // const personaje = {
  //   nombre: "Juan",
  //   edad: 33,
  //   admin: true,
  // };

  const filtro = req.query.filtro;
  console.log(filtro);

  const personajes = fs.readFileSync(__dirname + "/../data/personajes.json");
  res.json(JSON.parse(personajes));
});

router.get("/personajes/:id", (req, res) => {
  const id = req.params.id;

  res.send(id);
});

module.exports = router;
