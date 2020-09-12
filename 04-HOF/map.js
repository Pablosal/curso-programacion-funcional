//map devuelve una copia del array cambiando cada elemento segun la funcion callback
const edades = [21, 23, 12, 42, 55, 66];
const doblarEdad = (edad) => edad * 2;
const doble = edades.map(doblarEdad);
console.log(doble);

//Ejemplo practico
const encabezados = (texto) => `<h1>${texto}</h1>`;
const obtenerEtiquetas = (array) => array.map(encabezados);

console.log(obtenerEtiquetas(["Hoy", "Es", "Domingo"]));
