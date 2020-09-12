//Sirve para encontrar un elemento especifico
//en su callback puedes utilizar el elemento y el index
const numeros = [21, 43, 21, 53, 63, 212];
const valor = numeros.find((n) => n === 54);
// console.log(valor);
const mercaderes = [
  {
    name: "George",
    type: "Agua",
  },
  {
    name: "George",
    type: "Comida",
  },
];
const mercaderDeAgua = mercaderes.find((m) => m.type === "Agua");
console.log(mercaderDeAgua);
