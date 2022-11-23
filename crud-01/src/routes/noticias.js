const express = require("express");
const router = express.Router();

// CRUD

// C - Formulario para crear la noticia
router.get("/create", (req, res) => {
  res.render("noticias/create");
});
// C - Guardar los del formulario
router.post("/store", (req, res) => {});

// R - Listado de noticias
router.get("/", (req, res) => {
  res.render("noticias/index");
});
// R - Mostrar una noticia
router.get("/:id", (req, res) => {
  res.render("noticias/show", { id: req.params.id });
});

// U - Formulario con datos a modificar
// U - Actualizar los datos del formulario

// D - Borrar

module.exports = router;
