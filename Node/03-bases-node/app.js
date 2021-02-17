const {crearArchivo} = require('./helpers/multiplicar')

console.clear();

const base = 5;

crearArchivo(base)
  .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
  .catch(err => console.log(err));



    // fs.writeFile(`Tabla-${base}.txt`, salida, ()=>{
  //   if(err) throw err;

  //   console.log('Se grabo el archivo correctamente');

  // });