let errores = 0;

// function aumentarErrores() {
//   return errores++;
// }
function aumentarErroresPuro(errores) {
  return errores++;
}
console.log(aumentarErroresPuro(errores));
console.log(aumentarErroresPuro(errores));
console.log(aumentarErroresPuro(errores));
console.log(aumentarErroresPuro(errores));
//Cada vez que se llame, guardar el valor.

// let palabraActual = [];
// const cortarPalabra = (palabra) => {
//   palabraActual = palabra.split("");
//   letrasCorrectas = palabraActual.length;
//   return palabra.split("");
// };

//Transformara funcion pura
const cortarPalabraPura = (palabra) => {
  let palabraActual = [];
  const palabraActual = palabra.split(" ");
  let longitudDePalabra = palabraActual.length;
  return palabraActual;
};
