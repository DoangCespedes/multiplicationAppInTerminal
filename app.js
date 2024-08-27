require('colors')
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')



        

console.clear();

 



crearArchivo(argv.b, argv.l, argv.h )
  .then((nombreArchivo) => console.log(nombreArchivo.green, 'creado'))
  .catch((error) => console.error(error));
