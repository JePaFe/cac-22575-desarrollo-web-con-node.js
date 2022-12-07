const express = require("express");
const router = express.Router();

const { body, validationResult } = require("express-validator");

router.get("/contacto", (req, res) => {
  res.render("contacto", { values: {} });
});

const validate = [
  body("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength(3)
    .withMessage("El nombre tiene que tener por lo menos 3 caracteres"),
  body("correo", "Debe ser un correo valido").isEmail(),
  body("edad", "Debe tener 18 años o mas").isInt({ min: 18 }),
  body("mensaje", "Tiene que tener 5 caracteres como mínimo").isLength(5),
];

router.post("/contacto", validate, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // return res.status(400).json({ errors: errors.array() });
    res.render("contacto", { values: req.body, errors: errors.array() });
  }

  res.send(req.body);
});

module.exports = router;
