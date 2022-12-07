const db = require("./db");

const { DataTypes } = require("sequelize");

const NoticiaModel = db.define("noticias", {
  titulo: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: {
        args: true,
        msg: "El titulo es obligatorio",
      },
      len: {
        args: [3, 100],
        msg: "Tiene que tener entre 3 y 100 caracteres",
      },
    },
  },
  contenido: {
    type: DataTypes.TEXT,
    validate: {
      notEmpty: {
        args: true,
        msg: "El contenido es obligatorio",
      },
      len: {
        args: [5],
        msg: "Tiene que tener como mínimo 5 caracteres",
      },
    },
  },
});

module.exports = NoticiaModel;
