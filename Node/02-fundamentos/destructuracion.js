// destructuracion es una traduccion del ingles

let superGirl = {
  nombre: 'Kara',
  apellido: 'Dambers',
  poder: 'Super fuerza',
  getNombre: function(){   // o se puede dejar como "getNombre(){ "
    return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
  }
};

//this*

//console.log(superGirl.getNombre());

// let nombre = superGirl.nombre;
// let apellido = superGirl.apellido;
// let poder = superGirl.poder;

//ESTO ES LA DESTRUCTURACION 


let { nombre: primerNombre, apellido, poder } = superGirl;

console.log(primerNombre, apellido, poder );

