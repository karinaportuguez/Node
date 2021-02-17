let nombre = 'Super Girl';
let real = 'Kara Dambers';

console.log(`${nombre} es ${real}`);

// let nombreCompleto = nombre + ' es ' + real;
// let nombreTemplate = `${nombre} es ${real}`;

// console.log(nombreTemplate);

function getIdentidad(){
  return `${nombre} y su nombre real es ${real}`;
}

console.log(`la mejor super heroe es ${getIdentidad()}`);