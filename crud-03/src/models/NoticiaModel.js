const db = require("./db");

const { DataTypes } = require("sequelize");

const NoticiaModel = db.define("noticias", {
  titulo: {
    type: DataTypes.STRING,
  },
});

module.exports = NoticiaModel;
