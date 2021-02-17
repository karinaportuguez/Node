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

const id = 3;

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

/* PROMESAS EN CADENA */

// let nombre;

// getEmpleado(id)
// .then( empleado => {
//   nombre = empleado;
//   return getSalario( id )
// })
// .then( salario => console.log( `El empleado: ${nombre} tiene un salario de $ ${salario}`))
// .catch(err => console.log(err));


/*  Async : Transforma una funcion en una promesa    - funcion asincrona */

const getInfoUsuario = async(id) =>{
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);

    return `El salario del empleado: ${empleado} es de $ ${salario}`;

  }catch(error){
    throw error;   //reject de la funcion asincrona para llamar directamente el catch
  }
  
}

getInfoUsuario(id)
  .then(msg => console.log(msg))
  .catch(err => console.log(err));


