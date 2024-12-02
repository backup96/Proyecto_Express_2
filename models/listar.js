const guardarDB = require("../helpers/guardarArchivo");
const Tarea = require("./crear");
const archivo2 = "./db/data.json";
const fs = require("fs").promises;
var colors = require("colors");

class Tareas {
  async listadoArr() {
    try {
      const data = await fs.readFile(archivo2, "utf8");
      console.log(data);

      const contenido = JSON.parse(data);
      console.log(
        `${
          "---------------------------------------------------------------------------"
            .yellow
        }\n${"|".yellow}                                       ${
          "|".yellow
        }                                 ${"|".yellow}\n${
          "|".yellow
        }           ${"Id de la persona".red}            ${
          "|".yellow
        }              ${"Datos".red}              ${"|".yellow}\n${
          "|".yellow
        }                                       ${
          "|".yellow
        }                                 ${"|".yellow}\n${
          "---------------------------------------------------------------------------"
            .yellow
        }`
      );
      contenido.usuarios.forEach((tarea) => {
        var Nombre = `                      |\n`;
        var Correo = `                      |\n`;
        var Tel = `                    |\n`;
        var Addres = `                   |\n`;
        var completadoEn = "";
        const space = " ";
        for (let i = 0; i < Math.ceil(tarea.Nombre.length / 20); i++) {
          if (tarea.Nombre.length <= 20) {
            Nombre = `${tarea.Nombre.slice(i * 20, i * 20 + 20)}${space.repeat(
              (i + 1) * 20 - tarea.Nombre.length + 2
            )}|\n`;
          } else if (i === 0) {
            Nombre = `${tarea.Nombre.slice(i * 20, i * 20 + 20)}  |\n`;
          } else if (i + 1 === Math.ceil(tarea.Nombre.length / 20)) {
            Nombre = `${Nombre}|                                       |           ${tarea.Nombre.slice(
              i * 20,
              i * 20 + 20
            )}${space.repeat((i + 1) * 20 - tarea.Nombre.length + 2)}|\n`;
          }
        }
        for (let i = 0; i < Math.ceil(tarea.Correo.length / 20); i++) {
          if (tarea.Correo.length <= 20) {
            Correo = `${tarea.Correo.slice(i * 20, i * 20 + 20)}${space.repeat(
              (i + 1) * 20 - tarea.Correo.length + 2
            )}|\n`;
          } else if (i === 0) {
            Correo = `${tarea.Correo.slice(i * 20, i * 20 + 20)}  |\n`;
          } else if (i + 1 === Math.ceil(tarea.Correo.length / 20)) {
            Correo = `${Correo}|                                       |           ${tarea.Correo.slice(
              i * 20,
              i * 20 + 20
            )}${space.repeat((i + 1) * 20 - tarea.Correo.length + 2)}|\n`;
          }
        }
        for (let i = 0; i < Math.ceil(tarea.Tel.length / 18); i++) {
          if (tarea.Tel.length <= 18) {
            Tel = `${tarea.Tel.slice(i * 18, i * 18 + 18)}${space.repeat(
              (i + 1) * 18 - tarea.Tel.length + 2
            )}|\n`;
          } else if (tarea.Tel.length <= 0) {
            Tel = `                    |\n`;
          } else if (i === 0) {
            Tel = `${tarea.Tel.slice(i * 18, i * 18 + 18)}  |\n`;
          } else if (i + 1 === Math.ceil(tarea.Tel.length / 18)) {
            Tel = `${Tel}|                                       |             ${tarea.Tel.slice(
              i * 18,
              i * 18 + 18
            )}${space.repeat((i + 1) * 18 - tarea.Tel.length + 2)}|\n`;
          }
        }
        for (let i = 0; i < Math.ceil(tarea.Addres.length / 17); i++) {
          if (tarea.Addres.length <= 17) {
            Addres = `${tarea.Addres.slice(i * 17, i * 17 + 17)}${space.repeat(
              (i + 1) * 17 - tarea.Addres.length + 2
            )}|\n`;
          } else if (tarea.Addres.length <= 0) {
            Addres = `                      |\n`;
          } else if (i === 0) {
            Addres = `${tarea.Addres.slice(i * 17, i * 17 + 17)}  |\n`;
          } else if (i + 1 === Math.ceil(tarea.Addres.length / 17)) {
            Addres = `${Addres}|                                       |              ${tarea.Addres.slice(
              i * 17,
              i * 17 + 17
            )}${space.repeat((i + 1) * 17 - tarea.Addres.length + 2)}|\n`;
          }
        }
        console.log(
          `|  ${tarea.id} |   Nombre: ${Nombre}|                                       |   Correo: ${Correo}|                                       |   Teléfono: ${Tel}|                                       |   Dirección: ${Addres}|                                       |   completadoEn: ${tarea.completadoEn}|\n---------------------------------------------------------------------------\n`
        );
      });
    } catch (err) {
      console.error("Error al leer el archivo:", err);
    }
  }

  async listadoArrCompleto() {
    try {
      const data = await fs.readFile(archivo2, "utf8");

      const contenido = JSON.parse(data);
      console.log(
        `${
          "---------------------------------------------------------------------------"
            .yellow
        }\n${"|".yellow}                                       ${
          "|".yellow
        }                                 ${"|".yellow}\n${
          "|".yellow
        }           ${"Id de la persona".red}            ${
          "|".yellow
        }              ${"Datos".red}              ${"|".yellow}\n${
          "|".yellow
        }                                       ${
          "|".yellow
        }                                 ${"|".yellow}\n${
          "---------------------------------------------------------------------------"
            .yellow
        }`
      );
      contenido.usuarios.forEach((tarea) => {
        var Nombre = `                      |\n`;
        var Correo = `                      |\n`;
        var Tel = `                    |\n`;
        var Addres = `                   |\n`;
        var completadoEn = "";
        const space = " ";
        if (tarea.completadoEn === true) {
          for (let i = 0; i < Math.ceil(tarea.Nombre.length / 20); i++) {
            if (tarea.Nombre.length <= 20) {
              Nombre = `${tarea.Nombre.slice(
                i * 20,
                i * 20 + 20
              )}${space.repeat((i + 1) * 20 - tarea.Nombre.length + 2)}|\n`;
            } else if (i === 0) {
              Nombre = `${tarea.Nombre.slice(i * 20, i * 20 + 20)}  |\n`;
            } else if (i + 1 === Math.ceil(tarea.Nombre.length / 20)) {
              Nombre = `${Nombre}|                                       |           ${tarea.Nombre.slice(
                i * 20,
                i * 20 + 20
              )}${space.repeat((i + 1) * 20 - tarea.Nombre.length + 2)}|\n`;
            }
          }
          for (let i = 0; i < Math.ceil(tarea.Correo.length / 20); i++) {
            if (tarea.Correo.length <= 20) {
              Correo = `${tarea.Correo.slice(
                i * 20,
                i * 20 + 20
              )}${space.repeat((i + 1) * 20 - tarea.Correo.length + 2)}|\n`;
            } else if (i === 0) {
              Correo = `${tarea.Correo.slice(i * 20, i * 20 + 20)}  |\n`;
            } else if (i + 1 === Math.ceil(tarea.Correo.length / 20)) {
              Correo = `${Correo}|                                       |           ${tarea.Correo.slice(
                i * 20,
                i * 20 + 20
              )}${space.repeat((i + 1) * 20 - tarea.Correo.length + 2)}|\n`;
            }
          }
          for (let i = 0; i < Math.ceil(tarea.Tel.length / 18); i++) {
            if (tarea.Tel.length <= 18) {
              Tel = `${tarea.Tel.slice(i * 18, i * 18 + 18)}${space.repeat(
                (i + 1) * 18 - tarea.Tel.length + 2
              )}|\n`;
            } else if (tarea.Tel.length <= 0) {
              Tel = `                    |\n`;
            } else if (i === 0) {
              Tel = `${tarea.Tel.slice(i * 18, i * 18 + 18)}  |\n`;
            } else if (i + 1 === Math.ceil(tarea.Tel.length / 18)) {
              Tel = `${Tel}|                                       |             ${tarea.Tel.slice(
                i * 18,
                i * 18 + 18
              )}${space.repeat((i + 1) * 18 - tarea.Tel.length + 2)}|\n`;
            }
          }
          for (let i = 0; i < Math.ceil(tarea.Addres.length / 17); i++) {
            if (tarea.Addres.length <= 17) {
              Addres = `${tarea.Addres.slice(
                i * 17,
                i * 17 + 17
              )}${space.repeat((i + 1) * 17 - tarea.Addres.length + 2)}|\n`;
            } else if (tarea.Addres.length <= 0) {
              Addres = `                      |\n`;
            } else if (i === 0) {
              Addres = `${tarea.Addres.slice(i * 17, i * 17 + 17)}  |\n`;
            } else if (i + 1 === Math.ceil(tarea.Addres.length / 17)) {
              Addres = `${Addres}|                                       |              ${tarea.Addres.slice(
                i * 17,
                i * 17 + 17
              )}${space.repeat((i + 1) * 17 - tarea.Addres.length + 2)}|\n`;
            }
          }
          console.log(
            `|  ${tarea.id} |   Nombre: ${Nombre}|                                       |   Correo: ${Correo}|                                       |   Teléfono: ${Tel}|                                       |   Dirección: ${Addres}|                                       |   completadoEn: ${tarea.completadoEn}|\n---------------------------------------------------------------------------\n`
          );
        }
      });
    } catch (err) {
      console.error("Error al leer el archivo:", err);
    }
  }

  async listadoArrPendiente() {
    try {
      const data = await fs.readFile(archivo2, "utf8");

      const contenido = JSON.parse(data);
      console.log(
        `${
          "---------------------------------------------------------------------------"
            .yellow
        }\n${"|".yellow}                                       ${
          "|".yellow
        }                                 ${"|".yellow}\n${
          "|".yellow
        }           ${"Id de la persona".red}            ${
          "|".yellow
        }              ${"Datos".red}              ${"|".yellow}\n${
          "|".yellow
        }                                       ${
          "|".yellow
        }                                 ${"|".yellow}\n${
          "---------------------------------------------------------------------------"
            .yellow
        }`
      );
      contenido.usuarios.forEach((tarea) => {
        var Nombre = `                      |\n`;
        var Correo = `                      |\n`;
        var Tel = `                    |\n`;
        var Addres = `                   |\n`;
        var completadoEn = "";
        const space = " ";
        if (tarea.completadoEn === false) {
          for (let i = 0; i < Math.ceil(tarea.Nombre.length / 20); i++) {
            if (tarea.Nombre.length <= 20) {
              Nombre = `${tarea.Nombre.slice(
                i * 20,
                i * 20 + 20
              )}${space.repeat((i + 1) * 20 - tarea.Nombre.length + 2)}|\n`;
            } else if (i === 0) {
              Nombre = `${tarea.Nombre.slice(i * 20, i * 20 + 20)}  |\n`;
            } else if (i + 1 === Math.ceil(tarea.Nombre.length / 20)) {
              Nombre = `${Nombre}|                                       |           ${tarea.Nombre.slice(
                i * 20,
                i * 20 + 20
              )}${space.repeat((i + 1) * 20 - tarea.Nombre.length + 2)}|\n`;
            }
          }
          for (let i = 0; i < Math.ceil(tarea.Correo.length / 20); i++) {
            if (tarea.Correo.length <= 20) {
              Correo = `${tarea.Correo.slice(
                i * 20,
                i * 20 + 20
              )}${space.repeat((i + 1) * 20 - tarea.Correo.length + 2)}|\n`;
            } else if (i === 0) {
              Correo = `${tarea.Correo.slice(i * 20, i * 20 + 20)}  |\n`;
            } else if (i + 1 === Math.ceil(tarea.Correo.length / 20)) {
              Correo = `${Correo}|                                       |           ${tarea.Correo.slice(
                i * 20,
                i * 20 + 20
              )}${space.repeat((i + 1) * 20 - tarea.Correo.length + 2)}|\n`;
            }
          }
          for (let i = 0; i < Math.ceil(tarea.Tel.length / 18); i++) {
            if (tarea.Tel.length <= 18) {
              Tel = `${tarea.Tel.slice(i * 18, i * 18 + 18)}${space.repeat(
                (i + 1) * 18 - tarea.Tel.length + 2
              )}|\n`;
            } else if (tarea.Tel.length <= 0) {
              Tel = `                    |\n`;
            } else if (i === 0) {
              Tel = `${tarea.Tel.slice(i * 18, i * 18 + 18)}  |\n`;
            } else if (i + 1 === Math.ceil(tarea.Tel.length / 18)) {
              Tel = `${Tel}|                                       |             ${tarea.Tel.slice(
                i * 18,
                i * 18 + 18
              )}${space.repeat((i + 1) * 18 - tarea.Tel.length + 2)}|\n`;
            }
          }
          for (let i = 0; i < Math.ceil(tarea.Addres.length / 17); i++) {
            if (tarea.Addres.length <= 17) {
              Addres = `${tarea.Addres.slice(
                i * 17,
                i * 17 + 17
              )}${space.repeat((i + 1) * 17 - tarea.Addres.length + 2)}|\n`;
            } else if (tarea.Addres.length <= 0) {
              Addres = `                      |\n`;
            } else if (i === 0) {
              Addres = `${tarea.Addres.slice(i * 17, i * 17 + 17)}  |\n`;
            } else if (i + 1 === Math.ceil(tarea.Addres.length / 17)) {
              Addres = `${Addres}|                                       |              ${tarea.Addres.slice(
                i * 17,
                i * 17 + 17
              )}${space.repeat((i + 1) * 17 - tarea.Addres.length + 2)}|\n`;
            }
          }
          console.log(
            `|  ${tarea.id} |   Nombre: ${Nombre}|                                       |   Correo: ${Correo}|                                       |   Teléfono: ${Tel}|                                       |   Dirección: ${Addres}|                                       |   completadoEn: ${tarea.completadoEn}|\n---------------------------------------------------------------------------\n`
          );
        }
      });
    } catch (err) {
      console.error("Error al leer el archivo:", err);
    }
  }

  async completarTarea(id, Nombre_Ad, Correo_Ad, Tel_Ad, Addres_Ad) {
    var completadoEn = "";

    if (!Nombre_Ad || !Correo_Ad || !Tel_Ad || !Addres_Ad) {
      completadoEn = false;
    } else {
      completadoEn = true;
    }

    try {
      const data = await fs.readFile(archivo2, "utf8");

      const contenido = JSON.parse(data);

      const upDateEst = contenido.usuarios.map((item) =>
        item.id === id
          ? {
              ...item,
              Nombre: Nombre_Ad,
              Correo: Correo_Ad,
              Tel: Tel_Ad,
              Addres: Addres_Ad,
              completadoEn: completadoEn,
            }
          : item
      );

      const arrTarea = {
        usuarios: upDateEst,
      };

      fs.writeFile(archivo2, JSON.stringify(arrTarea, null, 2), function (err) {
        if (err) throw err;
      });
    } catch (err) {
      console.error("Error al leer el archivo:", err);
    }
  }

  async eliminarTarea(id) {
    try {
      const data = await fs.readFile(archivo2, "utf8");

      const contenido = JSON.parse(data);

      const upDateEst = contenido.usuarios.filter((item) =>
        item.id !== id
      );

      const arrTarea = {
        usuarios: upDateEst,
      };

      fs.writeFile(archivo2, JSON.stringify(arrTarea, null, 2), function (err) {
        if (err) throw err;
      })
      
    } catch (err) {
      console.error("Error al leer el archivo:", err);
    }
  }

  crearTarea(Nombre_, Correo_, Tel_, Addres_) {
    var Nombre = `                      |\n`;
    var Correo = `                      |\n`;
    var Tel = `                    |\n`;
    var Addres = `                   |\n`;
    var completadoEn = "";
    if (!Nombre_ || !Correo_ || !Tel_ || !Addres_) {
      completadoEn = false;
    } else {
      completadoEn = true;
    }
    const space = " ";
    const tarea = new Tarea(Nombre_, Correo_, Tel_, Addres_, completadoEn);
    console.log(tarea.Nombre);
    for (let i = 0; i < Math.ceil(tarea.Nombre.length / 20); i++) {
      if (tarea.Nombre.length <= 20) {
        Nombre = `${tarea.Nombre.slice(i * 20, i * 20 + 20)}${space.repeat(
          (i + 1) * 20 - tarea.Nombre.length + 2
        )}|\n`;
      } else if (i === 0) {
        Nombre = `${tarea.Nombre.slice(i * 20, i * 20 + 20)}  |\n`;
      } else if (i + 1 === Math.ceil(tarea.Nombre.length / 20)) {
        Nombre = `${Nombre}|                                       |           ${tarea.Nombre.slice(
          i * 20,
          i * 20 + 20
        )}${space.repeat((i + 1) * 20 - tarea.Nombre.length + 2)}|\n`;
      }
    }
    for (let i = 0; i < Math.ceil(tarea.Correo.length / 20); i++) {
      if (tarea.Correo.length <= 20) {
        Correo = `${tarea.Correo.slice(i * 20, i * 20 + 20)}${space.repeat(
          (i + 1) * 20 - tarea.Correo.length + 2
        )}|\n`;
      } else if (i === 0) {
        Correo = `${tarea.Correo.slice(i * 20, i * 20 + 20)}  |\n`;
      } else if (i + 1 === Math.ceil(tarea.Correo.length / 20)) {
        Correo = `${Correo}|                                       |           ${tarea.Correo.slice(
          i * 20,
          i * 20 + 20
        )}${space.repeat((i + 1) * 20 - tarea.Correo.length + 2)}|\n`;
      }
    }
    for (let i = 0; i < Math.ceil(tarea.Tel.length / 18); i++) {
      if (tarea.Tel.length <= 18) {
        Tel = `${tarea.Tel.slice(i * 18, i * 18 + 18)}${space.repeat(
          (i + 1) * 18 - tarea.Tel.length + 2
        )}|\n`;
      } else if (tarea.Tel.length <= 0) {
        Tel = `                    |\n`;
      } else if (i === 0) {
        Tel = `${tarea.Tel.slice(i * 18, i * 18 + 18)}  |\n`;
      } else if (i + 1 === Math.ceil(tarea.Tel.length / 18)) {
        Tel = `${Tel}|                                       |             ${tarea.Tel.slice(
          i * 18,
          i * 18 + 18
        )}${space.repeat((i + 1) * 18 - tarea.Tel.length + 2)}|\n`;
      }
    }
    for (let i = 0; i < Math.ceil(tarea.Addres.length / 17); i++) {
      if (tarea.Addres.length <= 17) {
        Addres = `${tarea.Addres.slice(i * 17, i * 17 + 17)}${space.repeat(
          (i + 1) * 17 - tarea.Addres.length + 2
        )}|\n`;
      } else if (tarea.Addres.length <= 0) {
        Addres = `                      |\n`;
      } else if (i === 0) {
        Addres = `${tarea.Addres.slice(i * 17, i * 17 + 17)}  |\n`;
      } else if (i + 1 === Math.ceil(tarea.Addres.length / 17)) {
        Addres = `${Addres}|                                       |              ${tarea.Addres.slice(
          i * 17,
          i * 17 + 17
        )}${space.repeat((i + 1) * 17 - tarea.Addres.length + 2)}|\n`;
      }
    }
    const plant = `|  ${tarea.id} |   Nombre: ${Nombre}|                                       |   Correo: ${Correo}|                                       |   Teléfono: ${Tel}|                                       |   Dirección: ${Addres}|                                       |   completadoEn: ${completadoEn}|\n---------------------------------------------------------------------------\n`;

    guardarDB(plant, tarea);
  }
}
module.exports = Tareas;
