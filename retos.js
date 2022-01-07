// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  let primerArray = array[0];
  return primerArray;
}
devolverPrimerElemento(["perro", "gato", "zorro"]);

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  const ultimoElemento = array[array.length - 1];
  return ultimoElemento;
}
devolverUltimoElemento(["perro", "gato", "zorro"]);

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  let largoDelArray = array.length;
  return largoDelArray;
}
obtenerLargoDelArray(["perro", "gato", "zorro"]);

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let porUno = array.map((n) => n + 1)
  return porUno
}
incrementarPorUno([1, 2, 3, 4])
function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}
agregarItemAlFinalDelArray(["perro", "gato", "zorro"]);

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}
agregarItemAlComienzoDelArray(["perro", "gato", "zorro"]);

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let arrayAString = palabras.join(" ")
  return arrayAString
}
dePalabrasAFrase(['hola', 'como', 'estas'])

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  const respuestaFrase = array.includes(elemento);
  return respuestaFrase;
}
arrayContiene(["e1", "e2", "e3", "e4", "e5"], "e3");

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  const resultadoTotal = numeros.reduce((n1, n2) => n1 + n2);
  return resultadoTotal;
}
agregarNumeros([1, 2, 3, 4, 5]);

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  resultadosTest.forEach((recorrido) => {
    return recorrido
  });
  const porcentajePromedio = resultadosTest.reduce((p1, p2) => p1 + p2);
  let resultadoPromedio = porcentajePromedio / resultadosTest.length;
  return resultadoPromedio
}
promedioResultadosTest([5, 6, 7, 8, 9]);

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let numeroMayor = Math.max(...numeros);
  return numeroMayor;
}
numeroMasGrande([5, 6, 7, 8, 9])

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length == 0){
    return 0;
  }else{
    const array = [];
    for(let i = 0; i < arguments.length; i++){
      array.push(arguments[i]);
    }
    return array.reduce((acc, item) => acc * item)
  }
}
multiplicarArgumentos(2, 3)

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí


}
cuentoElementos([8, 9, 18, 19, 20])

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario.
  //Escribe tu código aquí
  if(numeroDeDia == 1 || numeroDeDia == 7){
    return 'Es fin de semana'
  }else{
    return 'Es dia Laboral'
  }
}
diaDeLaSemana(5)
function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if(n == 9 || n >= 90){
    return true
  }else{
    return false
  }
}
empiezaConNueve(92)

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí
  for(i = 0; i < arreglo.length; i++){
    if(arreglo[i] == arreglo[i + 1]){
      return true
    }else{
      return false
    }
  }
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
  const resultado = array.filter(array => array > 100);
  return resultado
}
mayorACien([80, 90, 100, 150, 200, 250, 260, 300])

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}

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
