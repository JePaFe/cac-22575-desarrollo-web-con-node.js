const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "./src/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

app.use(require("./src/routes/paginas"));
app.use(require("./src/routes/productos"));

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
