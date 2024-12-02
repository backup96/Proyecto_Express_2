const  { v4 : uuidv4 } = require('uuid')
class Tarea {
  id = "";
  Nombre = "";
  Correo = "";
  Tel = "";
  Addres = "";
  completadoEn = "";

  constructor(nom, cor, tel, add, comp) {
    this.id = uuidv4();
    this.Nombre = nom;
    this.Correo = cor;
    this.Tel = tel;
    this.Addres = add;
    this.completadoEn = comp;
  }

  toJSON() {
    return {
      id: this.id,
      Nombre: this.Nombre,
      Correo: this.Correo,
      Tel: this.Tel,
      Addres: this.Addres,
      completadoEn: this.completadoEn,
    };
  }
}

module.exports = Tarea;
