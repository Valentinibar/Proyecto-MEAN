const moongose = require("mongoose");

const SitioSchema = moongose.Schema({
    id: {
        type: Number,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    direccion: {
        type: String,
        require: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }

});

module.exports = moongose.model("Sitio", SitioSchema);