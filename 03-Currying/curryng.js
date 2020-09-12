//Transformar una funcion que acepta muchos argumentos a una
//secuencia de funciones que acepta un argumento a la vez

const sumar = (a, b, c) => a + b + c;
console.log(sumar(8, 9, 12));

const sumarCurry = (a) => (b) => (c) => console.log(a + b + c);
console.log(sumarCurry(8)(9)(12));
// * Uso Practico
const calcularPresupuestoConIva = (iva) => {
  const ivaPorcentual = iva / 100;
  return (presupuesto) => presupuesto - presupuesto * ivaPorcentual;
};

// console.log(calcularPresupuestoConIva(19)(100000));
const presupuestoEnChile = calcularPresupuestoConIva(19);
const presupuestoEnNoruega = calcularPresupuestoConIva(30);
console.log(presupuestoEnChile(100000));
console.log(presupuestoEnNoruega(100000));
