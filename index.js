const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.get("/secret", (req, res) => res.sendFile(__dirname + "/secret.html"));

app.listen(8000);

// notasecret
