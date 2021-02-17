const empleados = [
  {
    id:1,
    nombre: 'Fernando'
  },
  {
    id:2,
    nombre: 'Linda'
  },
  {
    id:3,
    nombre: 'Karen'
  },
];

const salarios= [
  {
    id:1,
    salario: 1000
  },
  {
    id:2,
    nombre: 1500
  },
];

const getEmpleado = (id) => {
  
  return new Promise((resolve,reject) =>{

    const empleado = empleados.find(e => e.id === id);

    (empleado)
    ? resolve(empleado.nombre)
    : reject(`No existe el empleado con el id: ${id}`);
  });

}

const getSalario = (id) => {
  
  return new Promise((resolve,reject) =>{

    const salario = salarios.find(e => e.id === id);

    (salario)
    ? resolve(salario.salario)
    : reject(`No existe el salario del id: ${id}`);
  });

}


const id = 1;

// getEmpleado(id)
// .then( empleado => console.log( empleado ))
// .catch(err => console.log(err));

// getSalario(id)
// .then( salario => console.log( salario ))
// .catch(err => console.log(err));


/* NO HACER ESTO */
// getEmpleado(id)
// .then(empleado=>{
//   getSalario(id)
//     .then(salario=>{
//       console.log(`El empleado ${empleado} con el id ${id} tiene un salario de ${salario}`);
//     })
//     .catch(err=> console.log(err));
// })

/* PROMESAS EN CADENA */

let nombre;

getEmpleado(id)
.then( empleado => {
  nombre = empleado;
  return getSalario( id )
})
.then( salario => console.log( `El empleado: ${nombre} tiene un salario de $ ${salario}`))
.catch(err => console.log(err));