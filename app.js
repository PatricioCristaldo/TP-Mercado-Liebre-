/* const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.resolve(__dirname, "./public") ;
app.use( express.static(publicPath));

app.listen(3000, () => {
    console.log("servidor corriendo en el puerto 3000");
});

app.get("/", (req,res) => { res.sendFile("/")}) */

const express = require('express');
const path = require('path')
const app = express();

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/views/home.html")))
app.use(express.static(path.join(__dirname, "/public")))

app.listen(3000, () => console.log("Servidor esta levantado!"))
