const express = require("express");

const app = express();

app.use(express.json());

app.use("/personajes", require("./src/routes/personajesRoutes"));

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
