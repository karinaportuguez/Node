const fs = require('fs');

const crearArchivo = async(base = 5) => {
  try{
  
  let salida = '';
  console.log('=========================================');
  console.log(`             Tabla del ${base}`);
  console.log('=========================================');


  for(i = 1; i <=10; i++){
     salida += await`${ base } x ${ i } = ${base * i}\n`;  
  }

  console.log(salida);

  fs.writeFileSync(`Tabla-${base}.txt`, salida); 
  return `Tabla-${base}.txt creada`;

  }catch(error){
    throw error;
  }




}

module.exports={
  crearArchivo
}