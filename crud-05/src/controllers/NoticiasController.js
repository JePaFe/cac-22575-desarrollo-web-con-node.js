const NoticiaModel = require("../models/NoticiaModel");

const create = (req, res) => {
  res.render("noticias/create", { values: {} });
};

// const connection = require("../models/connection");

const store = async (req, res) => {
  // console.log(req.body);

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

  try {
    await NoticiaModel.create(req.body);
    res.redirect("/noticias");
  } catch (error) {
    // res.send(error);
    res.render("noticias/create", { values: req.body, errors: error.errors });
  }
};

const index = async (req, res) => {
  const noticias = await NoticiaModel.findAll();
  // console.log(noticias);
  res.render("noticias/index", { noticias: noticias });
};

const show = async (req, res) => {
  const noticia = await NoticiaModel.findByPk(req.params.id);
  res.render("noticias/show", { noticia: noticia });
};

const edit = async (req, res) => {
  const noticia = await NoticiaModel.findByPk(req.params.id);
  res.render("noticias/edit", { noticia: noticia });
};

const update = async (req, res) => {
  // console.log(req.body);
  await NoticiaModel.update(req.body, { where: { id: req.params.id } });
  res.redirect("/noticias");
};

const destroy = async (req, res) => {
  await NoticiaModel.destroy({ where: { id: req.params.id } });
  res.redirect("/noticias");
};

module.exports = {
  create,
  store,
  index,
  show,
  edit,
  update,
  destroy,
};
