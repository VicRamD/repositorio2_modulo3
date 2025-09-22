import path from 'path';

//Definir una ruta de archivo de ejemplo
const filePath = './data/example.txt'

//Obtener el directorio base
const dirName = path.dirname(filePath);
console.log("Directorio Base: ", dirName);

//