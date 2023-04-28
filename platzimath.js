const PlatziMath = {};

PlatziMath.esPar = function esPar(lista) {
  return !(lista.length % 2)
}

PlatziMath.esImpar = function esImpar(lista) {
  return lista.length % 2;
}

PlatziMath.calcularModa = function calcularModa(lista) {
  // crea objeto donde guarda los elementos y conut
  const listaCount = {};

  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];
    //creamos los elementos en el objeto por cada vez repite aumenta valor
    //listaCount[elemento] = 1;
    if (listaCount[elemento]) {
      //es lo mismo que
      //listaCount[elemento] = listaCount[elemento] + 1;
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  }

  const listaArray = Object.entries(listaCount);
  const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
  const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1];
  console.log({listaCount, listaArray, listaOrdenada, listaMaxNumber});
  console.log('La moda es: ' + listaMaxNumber[0]);
  const moda = listaMaxNumber[0];
  return moda;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
  const lista = PlatziMath.ordenarLista(listaDesordenada);
  const listaEsPar = PlatziMath.esPar(lista);

  if (listaEsPar) {
    const indexMitad1ListaPar = (lista.length / 2) - 1;
    const indexMitad2ListaPar = lista.length / 2;
    const listaMitades = [];
    listaMitades.push(lista[indexMitad1ListaPar]);
    listaMitades.push(lista[indexMitad2ListaPar]);

    const mediaListaPar = PlatziMath.calcularPromedio(listaMitades);
    return mediaListaPar;

  } else {
    const indexMitadlistaImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexMitadlistaImpar];
    console.log(indexMitadlistaImpar)
    console.log(medianaListaImpar);
    return medianaListaImpar;
  }
}

PlatziMath.calcularPromedio = function calcularPromedio(lista) {
  function sumarTodosElementos(valorAcumulado, nuevoValor) {
    return valorAcumulado + nuevoValor;
  }

  const sumaLista = lista.reduce(sumarTodosElementos);
  const promedio = sumaLista / lista.length;
  console.log(promedio);
  return promedio;
}

PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado - nuevoValor;
  }

  const lista = listaDesordenada.sort(ordenarListaSort);

  return lista;
}


PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada, i) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    return valorAcumulado[i] - nuevoValor[i];
  }

  const lista = listaDesordenada.sort(ordenarListaSort);
  return lista;
}
