//Rutas para sitio
const express = require("express");
const router = express.Router();
const sitioController = require("../controllers/sitioController");

//api/sitios
router.post("/", sitioController.crearSitio);
router.get("/", sitioController.obtenerSitios);
router.put("/:id",sitioController.actualizarSitio);
router.get("/:id",sitioController.obtenerSitio);
router.delete("/:id",sitioController.eliminarSitio);




module.exports = router;