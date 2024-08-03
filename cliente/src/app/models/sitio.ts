export class Sitio {
    _id: number;
    nombre: string;
    descripcion: string;
    direccion: string;


    constructor(id: number, nombre: string, descripcion: string, direccion: string ){
        this._id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.direccion = direccion;
    }
}


