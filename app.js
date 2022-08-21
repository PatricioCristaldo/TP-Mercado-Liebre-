
const express = require('express');
const path = require('path')
const app = express();

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/views/home.html")));
app.get('/register',(req,res) => res.sendFile(path.resolve(__dirname,'views','register.html')));
app.get("/login", (req, res) => res.sendFile(path.join(__dirname, "/views/login.html")));
app.use(express.static(path.join(__dirname, "/public")))

app.listen(3000, () => console.log("Servidor esta levantado!"))
