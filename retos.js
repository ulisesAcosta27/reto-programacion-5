// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  const resultado = array[0];
  console.log(resultado)
}
devolverPrimerElemento(['e1', 'e2', 'e3', 'e4', 'e5'])

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  const resultado = array[-1];
  console.log(resultado)
}
devolverUltimoElemento(['e1', 'e2', 'e3', 'e4', 'e5'])

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  for (i = 1; i <= array.length; i++) {
      let resultado = i;
      console.log(`elemento numero: ${resultado}`)
  }
};
obtenerLargoDelArray(['e1', 'e2', 'e3', 'e4', 'e5'])

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (i = 0; i < array.length; i++) {
      let sumaDeElementos = array[i] + 1;
      console.log(`incrementos de numero ${array[i]}: ${sumaDeElementos}`)
  }
}
incrementarPorUno([1, 2, 3, 4, 5])

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  console.log(array);
}
agregarItemAlFinalDelArray(['e1', 'e2', 'e3', 'e4', 'e5'], 'e6')

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el metodo `.unshift`
  // Tu código:
  array.unshift(elemento)
  console.log(array);
}
agregarItemAlComienzoDelArray(['e1', 'e2', 'e3', 'e4', 'e5'], 'e0')

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let respuestaFresa = palabras.reduce((e1, e2) => `${e1} ${e2}`)
  console.log(respuestaFresa)
}
dePalabrasAFrase(['hola', 'mi', 'nombre', 'es','ulises'])

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  const respuestaFrase = array.includes(elemento);
  console.log(respuestaFrase)
}
arrayContiene(['e1', 'e2', 'e3', 'e4', 'e5'], 'e3')

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  const resultadoTotal = numeros.reduce((n1, n2) => {
      return n1 + n2
  })
  console.log(resultadoTotal)
}
agregarNumeros([1, 2, 3, 4, 5])

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  resultadosTest.forEach(recorrido => {
      console.log(`valor de notas: ${recorrido}`)
  });
  const porcentajePromedio = resultadosTest.reduce((p1, p2) => p1 + p2);
  let resultadoPromedio = porcentajePromedio / resultadosTest.length;
  console.log(`el promedio de todas las notas son de: ${resultadoPromedio}`);
}
promedioResultadosTest([5, 6, 7, 8, 9])

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  const numeroMayor = Math.max(numeros.length)
  console.log(numeroMayor)
}
numeroMasGrande([1, 2, 3, 4, 5])

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let masDieciocho = [];
  for (i = 0; i <= arreglo.length; i++) {
      if (arreglo[i] >= 18) {
          masDieciocho.push(arreglo[i])
      }
  }
  console.log(masDieciocho)
}
cuentoElementos([1, 38, 5, 18, 8, 28])

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (n === 9 || n >= 90) {
      console.log('el numero que ingresaste empieza con nueve')
  } else {
      console.log('tu numero no empeiza con nueve')
  }
}
empiezaConNueve(97)

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  const igualdadNumerica = (arreglo) => arreglo == 9;
  const respuestasDeIguales = arreglo.every(igualdadNumerica)
  console.log(respuestasDeIguales)
}
todosIguales([9, 9, 9, 9, 9])

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  for (i = 0; i <= 100; i++) {
      let multiplicacion = i * 2;
      array.push(multiplicacion);
  }
  const mayoresDeCien = array.filter((numeroTotales) => numeroTotales > 100)
  console.log(mayoresDeCien)
}
mayorACien([])

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let numerosBases = [];
  let numerosMultiplicados = []
  for(i= 0; i <= 10; i++){
      numerosBases.push(i)
      let multiplicacion = i * 2;
      numerosMultiplicados.push(multiplicacion);        
  }
  console.log(numerosBases)
  console.log(numerosMultiplicados);
}
breakStatement()

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement,
};
