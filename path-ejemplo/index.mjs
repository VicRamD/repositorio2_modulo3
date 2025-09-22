import path, { basename } from 'path';

/*En la consola usar cd path-ejemplo
y luego node index.mjs
*/

//Definir una ruta de archivo de ejemplo
const filePath = './data/example.txt'

//Obtener el directorio base
const dirName = path.dirname(filePath);
console.log("Directorio Base: ", dirName);

//obtener nombre del archivo sin extensión
const baseName = path.basename(filePath, '.txt');
console.log(`Nombre del archivo: ${baseName}`);

//Obtener la extensión del archivo
const extName = path.extname(filePath);
console.log(`Extensión del archivo: ${extName}`);

//Crear una ruta unida
const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log(`Nueva ruta: ${newPath}`);
