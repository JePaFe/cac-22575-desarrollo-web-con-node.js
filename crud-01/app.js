const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/posts", require("./src/routes/posts"));

const PORT = 5000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
