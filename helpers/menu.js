// import colors from 'colors';
var colors = require("colors");
const inquirer = require("inquirer");
const { validate } = require("uuid");

const preg = [
  {
    type: "list",
    name: "options",
    message: "Escoje la opción de tu preferencia.",
    choices: [
      {
        value: "1",
        name: `${"1.".red} Crear usuario`,
      },
      {
        value: "2",
        name: `${"2.".red} Listar usuario`,
      },
      {
        value: "3",
        name: `${"3.".red} Listars usuario con datos completos`,
      },
      {
        value: "4",
        name: `${"4.".red} Listars usuario con datos incompletos`,
      },
      {
        value: "5",
        name: `${"5.".red} Actualizar usuario`,
      },
      {
        value: "6",
        name: `${"6.".red} Borrar usuario`,
      },
      {
        value: "0",
        name: `${"0.".red} Salir`,
      },
    ],
  },
];

const menu = async () => {
  console.clear();
  console.log(
    `${"°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°".yellow}\n${
      "           First application".red
    }\n${"°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°".yellow}`
  );

  const { options } = await inquirer.default.prompt(preg);
  return options;
};

const pause = async () => {
  const questions = [
    {
      type: "input",
      name: "enter",
      message: `Presione la tecla ${"enter".green}`,
    },
  ];
  console.log('\n')
  await inquirer.default.prompt(questions);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.lenght === 0) {
          return "Por favor ingrese una descripción";
        }
        return true;
      },
    },
  ];
  const { desc } = await inquirer.default.prompt(question);
  return desc;
};

module.exports = {
  menu,
  pause,
  leerInput,
};
