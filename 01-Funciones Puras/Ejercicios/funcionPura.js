let errores = 0;

function aumentarErrores() {
  return errores++;
}

let palabraActual = [];
const cortarPalabra = (palabra) => {
  palabraActual = palabra.split("");
  letrasCorrectas = palabraActual.length;
  return palabra.split("");
};
