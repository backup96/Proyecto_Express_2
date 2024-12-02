const { menu, pause, leerInput } = require("./helpers/menu");
const Tareas = require("./models/listar");
const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  do {
    opt = await menu();
    switch (opt) {
      case "1":
        const Nombre = await leerInput("Nombre completo: ");
        const Correo = await leerInput("Correo electrónico: ");
        const Tel = await leerInput("Teléfono: ");
        const Addres = await leerInput("Dirección: ");
        tareas.crearTarea(Nombre, Correo, Tel, Addres);
        break;
      case "2":
        await tareas.listadoArr();
        break;
      case "3":
        await tareas.listadoArrCompleto();
        break;
      case "4":
        await tareas.listadoArrPendiente();
        break;
      case "5":
        const id = await leerInput(
          "Ingrese el id de la persona a actualizar: "
        );
        const Nombre_Ad = await leerInput("Nombre completo: ");
        const Correo_Ad = await leerInput("Correo electrónico: ");
        const Tel_Ad = await leerInput("Teléfono: ");
        const Addres_Ad = await leerInput("Dirección: ");
        await tareas.completarTarea(
          id,
          Nombre_Ad,
          Correo_Ad,
          Tel_Ad,
          Addres_Ad
        );
        break;
      case "6":
        const id_E = await leerInput(
          "Ingrese el id de la persona a eliminar: "
        );
        await tareas.eliminarTarea(id_E);
        break;
      default:
        break;
    }
    await pause();
  } while (opt !== "0");
};

main();
