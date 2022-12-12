const express = require("express");
const router = express.Router();

const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

const controller = require("../controllers/NoticiasController");

// const { Router } = require("express");
// CRUD

// C - Formulario para crear la noticia
router.get("/create", controller.create);
// C - Guardar los del formulario
router.post("/store", upload.single('imagen'), controller.store);

// R - Listado de noticias
router.get("/", controller.index);
// R - Mostrar una noticia
router.get("/:id", controller.show);

// U - Formulario con datos a modificar
router.get("/:id/edit", controller.edit);
// U - Actualizar los datos del formulario
router.put("/:id/update", upload.single('imagen'), controller.update);

// D - Borrar
router.delete("/:id/delete", controller.destroy);

module.exports = router;
