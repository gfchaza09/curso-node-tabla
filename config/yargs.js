const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Base de la tabla de multiplicar'
        },
        'l': {
            alias: 'list',
            type: 'boolean',
            default: false,
            describe:'Muestra la tabla en consola'
        },
        'lim': {
            alias: 'limit',
            type: 'number',
            default: 10,
            describe: 'Limite para obtener la tabla de multiplicar hasta ese número'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un número";
        }
        if(isNaN(argv.lim)) {
            throw "El limite tiene que ser un número";
        }
        return true;
    })
    .argv;

module.exports = argv;