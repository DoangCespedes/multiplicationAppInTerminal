const { options } = require('yargs');
const argv = require('yargs')
            .option('l', {
              alias: 'listar',
              type: 'boolean',
              default: false,
              describe: "lista los valores de la tabla de multiplicar"
            })
            .option('h', {
                alias: 'hasta',
                type: 'number',
                demandOption: true,
                describe: "muestra hasta donde van a listar los valores de la tabla de multiplicar"
              })
            .option('b', {
              alias: 'base',
              type: 'number',
              demandOption: true,
              describe: "Es la base de la tabla de multiplicar"
            })
            .check( (argv, options) => {
              if (isNaN( argv.b)) {
                throw new Error("La base tiene que ser un numero");
                
              }
              return true;
            })
            .argv;

module.exports = argv