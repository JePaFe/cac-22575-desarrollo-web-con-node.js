const express = require("express");
const router = express.Router();

const NoticiaModel = require("../models/NoticiaModel");

// const { Router } = require("express");

// CRUD

// C - Formulario para crear la noticia
router.get("/create", (req, res) => {
  res.render("noticias/create");
});

// const connection = require("../models/connection");

// C - Guardar los del formulario
router.post("/store", (req, res) => {
  // console.log(req.body);
  NoticiaModel.create(req.body);
  // INSERT INTO `noticias` (`id`,`titulo`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?);

  // connection.query(
  //   "INSERT INTO noticias SET ?",
  // req.body,
  //   (error, results) => {
  //     if (error) {
  //       throw error;
  //     }

  //     console.log(results);
  //   }
  // );

  // connection.query(
  //   "INSERT INTO noticias (titulo) VALUES (?)",
  //   req.body.titulo,
  //   (error, results) => {
  //     if (error) {
  //       throw error;
  //     }

  //     console.log(results);
  //   }
  // );
  res.redirect("/noticias");
});

// R - Listado de noticias
router.get("/", async (req, res) => {
  const noticias = await NoticiaModel.findAll();
  // console.log(noticias);
  res.render("noticias/index", { noticias: noticias });
});
// R - Mostrar una noticia
router.get("/:id", async (req, res) => {
  const noticia = await NoticiaModel.findByPk(req.params.id);
  res.render("noticias/show", { noticia: noticia });
});

// U - Formulario con datos a modificar
router.get("/:id/edit", async (req, res) => {
  const noticia = await NoticiaModel.findByPk(req.params.id);
  res.render("noticias/edit", { noticia: noticia });
});
// U - Actualizar los datos del formulario
router.put("/:id/update", (req, res) => {
  // console.log(req.body);
  NoticiaModel.update(req.body, { where: { id: req.params.id } });
  res.redirect("/noticias");
});

// D - Borrar
router.delete("/:id/delete", async (req, res) => {
  await NoticiaModel.destroy({ where: { id: req.params.id } });
  res.redirect("/noticias");
});

module.exports = router;
