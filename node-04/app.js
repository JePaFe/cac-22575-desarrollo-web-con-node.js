const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Inicio!!!");
});

app.get("/nosotros", (req, res) => {
  res.sendFile(__dirname + "/nosotros.html");
});

app.use(require("./routes/personajes"));

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
