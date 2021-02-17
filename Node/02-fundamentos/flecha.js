// //funcion normal
// function sumar(a,b){
//   return a+ b;
// }

// let restar = (a,b) =>{
//   return a - b;
// }
// // SE PUEDE ESCRIBIR ASI SI ES EN UNA SOLA LINEA
// //let restar = (a,b) => a - b

// console.log(sumar(10,5));
// console.log(restar(10,5));


//EJERCICIO
//Transformar la sigiente funcion a una arrow funcion
// function saludar(){
//   return 'Hola mundo';
// }
//RESULTADO:
//let saludar = () => 'Hola mundo';

//CASO CURIOSO
// function saludar(nombre){
//   return `Hola ${nombre}`;
// }
//SE PUEDE QUITAR LOS PARENTESIS SI ES SOLO UNA VARIABLE
// let saludar = nombre => `Hola ${nombre}`;

// console.log(saludar('Karina'));

//TENER CUIDADO  AL PONER FUNCIONES DE FLECHA DENTRO DE OBJETOS AL DESESTRUCTURAR
//USAR CUNCIONES NORMALES COMO A CONTINUACION
let superGirl = {
  nombre: 'Kara',
  apellido: 'Dambers',
  poder: 'Super fuerza',
  getNombre(){   // o se puede dejar como "getNombre(){ "
    return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
  }
};

console.log(superGirl.getNombre());