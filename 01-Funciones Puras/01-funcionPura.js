//Funcion Pura

const palabras = ["Una", "Vez", "Habia"];
function juntarPalabras(array) {
  return array.join(" ");
}

console.log(juntarPalabras(palabras));
console.log(palabras);

//Cuando Debes hacer un cambio mutable
//Cambiar una palabra del array
const palabras = ["Una", "Vez", "Habia"];

const obtenerNuevaPalabra = (array) => {
  const copiaDeArray = [...array];
  copiaDeArray[1] = "Gaseosa";
  return copiaDeArray;
  // array[1] = "Gaseosa";
  // return array;
};

console.log(obtenerNuevaPalabra(palabras));
console.log(palabras);
