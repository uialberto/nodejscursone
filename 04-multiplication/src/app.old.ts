// const message: string = 'Hola Mundo!!';
// console.log(message);

import { yarg } from './config/plugins/args.plugin'

const {b:base, l:limite, s:showTable} = yarg;

import fs from 'fs';

let outputMessage = '';
// const base = 5;
const headerMessage = `
=====================
TABLA del ${base}
=====================\n
`;
for (let index = 1; index <= limite; index++) {
    outputMessage += `${base} X ${index} = ${base * index} \n`;    
}
outputMessage = headerMessage + outputMessage;
if(showTable)
{
    console.log(outputMessage);
}
const outputPath = 'outputs';
fs.mkdirSync(outputPath,{recursive:true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`,outputMessage);       
console.log('Archivo Creado');