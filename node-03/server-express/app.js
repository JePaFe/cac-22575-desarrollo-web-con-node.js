const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hola Express");
});

app.get("/contacto", (req, res) => {
  res.send("Contacto");
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
