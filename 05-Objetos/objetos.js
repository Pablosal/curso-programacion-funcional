//Objetos Inmutables
const casa = {
  lamparas: 3,
  dueños: ["Domingo", "Martina"],
  materiales: {
    pieza: "Ladrillo",
    techo: "Pasta Muro",
  },
};
//Copia Superficial
const casa2 = {
  ...casa,
  habitantes: 9,
};
const casa3 = Object.assign({}, casa, { lamparas: 5 });
//Copia Profunda
const casa4 = JSON.parse(JSON.stringify(casa));

casa.materiales.techo = "Hormigon";
console.log("casa", casa.materiales.techo);
console.log("casa2", casa2.materiales.techo);
console.log("casa3", casa3.materiales.techo);
console.log("casa4", casa4.materiales.techo);
