let empleados = [{
  id: 1,
  nombre: 'Karina'
},{
  id: 2,
  nombre: 'Melisa'
},{
  id: 3,
  nombre: 'Juan'
}];


let salarios = [{
  id: 1,
  salario: 2000
},{ 
  id: 2,
  salario: 1000
}];

// let getEmpleado = (id, callback) =>{
//   let empleadoDB = empleados.find(empleado =>{
//     return empleado.id === id;
//   })
// }

//ARROW FUNCTION
let getEmpleado = (id, callback) =>{

  let empleadoDB = empleados.find(empleado => empleado.id === id)
  //console.log(empleadoDB);
  if (!empleadoDB){
    callback(`No existe un empleado con el id: ${id}`)
  } else{
    callback(null, empleadoDB);
    //callback(null, empleadoDB);  error comun 1 llamar dos veces callback
  }
}


// getEmpleado(1, (err, empleado)=>{
//   if(err){
//     return console.log(err);
//   }else{
//     console.log(empleado);
//   }
  
// });
//EJERCICIO
//MANDAR NOMBRE DE USUARIO Y SU SALARIO
let getSalario = (empleado, callback)=>{

  let salarioDB = salarios.find(salario => salario.id === empleado.id);
  
  if (!salarioDB){
    callback(`No encontro un salario para el usuario ${empleado.nombre}`)
  } else{
    callback(null, {
      nombre: empleado.nombre,
      salario: salarioDB.salario,
      id: empleado.id,
    });
  }
}



getEmpleado(1, (err, empleado)=>{
  if(err){
    return console.log(err);
  }

  getSalario(empleado, (err, resp)=>{
    if(err){
      return console.log(err);
    };
    console.log(`El salario de ${resp.nombre} es de ${resp.salario} `);
  });
});