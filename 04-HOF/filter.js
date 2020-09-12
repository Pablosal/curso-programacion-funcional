//filtar elemntos dado una condicion
const numeros = [21, 43, 21, 53, 63, 212];
const mayores = numeros.filter((n) => n > 40);
console.log(mayores);
const mercaderes = [
  {
    name: "George",
    type: "Agua",
  },
  {
    name: "George",
    type: "Comida",
  },
  {
    name: "Ali",
    type: "Biberes",
  },
  {
    name: "Carlos",
    type: "Teclados",
  },
  {
    name: "Lucia",
    type: "Cereales",
  },
];
const mercaderesIguales = mercaderes.filter((m) => m.name === "George");
console.log(mercaderesIguales);
