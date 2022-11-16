const express = require("express");
const router = express.Router();

module.exports = router;

router.get("/productos", (req, res) => {
  const datos = [
    { id: 1, nombre: "Prod 1" },
    { id: 2, nombre: "Prod 2" },
    { id: 3, nombre: "Prod 3" },
    { id: 4, nombre: "Prod 4" },
    { id: 5, nombre: "Prod 5" },
  ];
  res.render("productos", { title: "Productos!!!", productos: datos });
});
