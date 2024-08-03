const Sitio = require("../models/Sitio");

exports.crearSitio = async (req, res) => {
    
    try {
        let sitio;

        //Creamos nuestro sitio
        sitio = new Sitio(req.body);

        await sitio.save();
        res.send(sitio);

    } catch(error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.obtenerSitios = async (req, res) => {
    try {
        const sitios = await Sitio.find();
        res.json(sitios)
    } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }}

exports.actualizarSitio = async (req, res) => {

    try {
        const {id, nombre, descripcion, direccion } = req.body;
        let sitio = await Sitio.findById(req.params.id); 

        if(!sitio) {
            res.status(404).json({ msg: "No existe el sitio"})
        }
        sitio.id = id;
        sitio.nombre = nombre;
        sitio.descripcion = descripcion;
        sitio.direccion = direccion;

        sitio = await Sitio.findOneAndUpdate({_id : req.params.id}, sitio, {new: true} )
        res.json(sitio);    
        

    } catch(error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}

exports.obtenerSitio = async (req, res) => {

    try {
       
        let sitio = await Sitio.findById(req.params.id); 

        if(!sitio) {
            res.status(404).json({ msg: "No existe el sitio"})
        }
        
        res.json(sitio);    
        

    } catch(error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}


exports.eliminarSitio = async (req, res) => {

    try {
       
        let sitio = await Sitio.findById(req.params.id); 

        if(!sitio) {
            res.status(404).json({ msg: "No existe el sitio"})
        }
        await Sitio.deleteOne({_id: req.params.id})
        res.json({ msg: "Sitio eliminado con exito"});    
        

    } catch(error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
}