//Loop para arrays
//Sirve para iterar a traves del array y hacer un cambio sin retornar nada
const edades = [12, 43, 58, 65, 2, 12];
// const edadesTotales = edades.forEach((e) => e * 9);

//Insertar en el DOM
const insertarNumeros = (numeros) => {
  const seccion = document.getElementById("seccion_de_numeros");
  numeros.forEach((n) => (seccion.innerHTML += `<h1>${n}</h1>`));
};
insertarNumeros(edades);
