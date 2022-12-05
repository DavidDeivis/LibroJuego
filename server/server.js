const path = require("path");
const express = require("express");
const app = express();

//setting
app.set("PORT", process.env.PORT ||7040);

//File static
app.use(express.static(path.join(__dirname, "../public")));

//Inicializar
const server = app.listen(app.get("PORT"), ()=>{
	console.log(`Servidor en ${app.get("PORT")}`);
})