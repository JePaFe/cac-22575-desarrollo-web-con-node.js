const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

/* Leemos el archivo JSON*/
const traerPersonajes = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../data/personajes.json"))
);

/* Respondemos con TODOS los personajes */
router.get("/", (req, res) => {
  let data;
  /* Si tiene un status filtramos por lo que cumplen con esa condición */
  if (req.query.status) {
    const status = req.query.status;
    const resultados = traerPersonajes.filter(
      (personaje) => personaje.status.toLowerCase() == status
    );
    data = resultados;
  } else {
    data = traerPersonajes;
  }
  res.send(data);
});

/* Respondemos con el personaje que corresponde al ID */
router.get("/:id", (req, res) => {
  // lógica
  const id = req.params.id;
  const personaje = traerPersonajes.find((personaje) => personaje.id == id);

  res.send(personaje);
});

router.post("/create", (req, res) => {
  const id = traerPersonajes.length;
  const nuevoPersonaje = {
    id: id + 1,
    ...req.body,
  };
  traerPersonajes.push(nuevoPersonaje);
  fs.writeFileSync(
    path.resolve(__dirname, "../data/personajes.json"),
    JSON.stringify(traerPersonajes, null, " ")
  );
  console.log(traerPersonajes);
  res.send("Personaje guardado con éxito");
});

router.put("/:id/edit", (req, res) => {
  const id = req.params.id;
  const nuevaLista = traerPersonajes.map((personaje) => {
    if (personaje.id == id) {
      return (personaje = {
        id: personaje.id,
        ...req.body,
      });
    }

    return personaje;
  });
  fs.writeFileSync(
    path.resolve(__dirname, "../data/personajes.json"),
    JSON.stringify(nuevaLista, null, " ")
  );

  res.send("Personaje Editado con éxito");
});

router.delete("/:id/delete", (req, res) => {
  const id = req.params.id;
  const nuevaLista = traerPersonajes.filter((personaje) => personaje.id != id);
  nuevaLista.forEach((personaje, i) => (personaje.id = i + 1));

  fs.writeFileSync(
    path.resolve(__dirname, "../data/personajes.json"),
    JSON.stringify(nuevaLista, null, " ")
  );

  res.send("Personaje eliminado con éxito");
});

module.exports = router;
