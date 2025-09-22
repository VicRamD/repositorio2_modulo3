// file: fs-sync-example.mjs
import fs from 'node:fs';
//import fs from 'fs';

try {
    // Leer un archivo de manera SINCRÓNICA
    const data = fs.readFileSync('./data/example.txt', 'utf8');
    console.log('Contenido del archivo:', data);
    console.log('File readed');

    // Escribir un nuevo archivo (bloqueante)
    fs.writeFileSync('./data/newfile.txt', 'Contenido nuevo', 'utf8');
    console.log('Contenido creado y escrito');
    console.log('File created');

    // Renombrar un archivo (bloqueante)
    fs.renameSync('./data/newfile.txt', './data/renamedfile.txt');
    console.log('Contenido renombrado');
} catch (err) {
    console.error('Error:', err);
    process.exitCode=1;
} 

//Leer un archivo de manera asíncrona
/*fs.readFile('./data/example.txt', 'utf8', (err, data)=>{
    if(err) throw err;
    console.log("Contenido del archivo: ", data);
});

//Escribir un nuevo archivo
fs.writeFile('./data/newfile.txt', 'Contenido nuevo', (err, data)=>{
    if(err) throw err;
    console.log("Contenido creado y escrito");
});

//Renombrar un archivo
fs.rename('./data/newfile.txt', './data/renamedfile.txt', (err, data)=>{
    if(err) throw err;
    console.log("Contenido renombrado");
}); */



