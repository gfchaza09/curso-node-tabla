const colors = require("colors/safe");

const { crearArchivo } = require('./helpers/multiplicar');

const argv = require('./config/yargs');

console.clear();

crearArchivo( argv.b, argv.lim, argv.l )
    .then( nombreArchivo => console.log(colors.green(nombreArchivo, 'creado')))
    .catch(err => console.log(err));


// Implementacion del programa sin Yargs

// const [ , , arg3 = 'base=1'] = process.argv;
// const [ , base = 1] = arg3.split('=');

// const base = 1;

// crearArchivo( base )
//     .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));