console.log(PlatziMath);

// Analisis personal para Juanita

// buscar a Juanita
function encontrarPersona(personaEnBusqueda) {
  return salarios.find(persona => persona.name == personaEnBusqueda);

  // const persona = salarios.find((persona) => { (opcion para el codigo anterior)
  //   return persona.name == personaEnBusqueda;
  // });
  // return persona;
}

function medianaPorPersona(nombrePersona) {
  const trabajos = encontrarPersona(nombrePersona).trabajos;

  //crear un array apartir de un array existente
  const salarios = trabajos.map(function(elemento) {
    return elemento.salario;
  });

  const medianaSalarios = PlatziMath.calcularMediana(salarios);
  return medianaSalarios;
}