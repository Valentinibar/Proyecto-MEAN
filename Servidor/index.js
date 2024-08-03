const express = require("express");
const conectarDB = require('./config/db.js');
const cors = require("cors");

//Creamos el servidor
const app = express();

// Conectamos a la BD
conectarDB();
app.use(cors());

app.use(express.json());   //habilitamos a que nuestra aplicacion reciba datos JSON

app.use("/api/sitios", require("./routes/sitio"));



app.listen(4000, () => {
    console.log("El servidor esta corriendo perfectamente")
})