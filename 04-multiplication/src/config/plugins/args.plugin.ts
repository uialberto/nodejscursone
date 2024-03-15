import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
.option('b', {
    alias: 'base',
    type : 'number',
    demandOption: true,
    describe:'Base Tabla de Multiplicacion'
})
.option('l',{
    alias: 'limit',
    type : 'number',
    default: 10,
    describe:'Limite Tabla de Multiplicacion'
})
.option('s',{
    alias: 'show',
    type : 'boolean',
    default: false,
    describe:'Mostrar Tabla de Multiplicacion'
})
.option('n',{
    alias: 'name',
    type : 'string',
    default: 'multiplicacion-table',
    describe:'File Name'
})
.option('d',{
    alias: 'destination',
    type : 'string',
    default: 'outputs',
    describe:'File Destinations'
})
.check((argv, options) => {

    if(argv.b < 1) throw   'Error. Base debe ser mayor que cero.'
    
    // console.log(argv);
    // throw 'Error: Ingrese datos validos.'
    return true;
})
.parseSync();
