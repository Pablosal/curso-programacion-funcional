//Ejercicios de Entrevista
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log("Index: " + i + ", element: " + arr[i]);
  }, 3000);
}

//Transformar Esta funcion a normal a una que utilice closures
const obtenerUsuarios = (gusto) => {
  const nombres = [
    { nombre: "Carlos", gusto: "Cafe" },
    { nombre: "Claudia", gusto: "Canela" },
    { nombre: "Evaldo", gusto: "Cafe" },
    { nombre: "Camila", gusto: "Te" },
    { nombre: "Mohamed", gusto: "Te" },
    { nombre: "Gabriel", gusto: "Canela" },
  ];
  return nombres.filter((n) => n.gusto === gusto);
};
const transformarUsuarios = (gustosDeUsuarios) => {
  const usuariosGustos = gustosDeUsuarios.forEach((g) => (g.aprovado = true));
  return usuariosGustos;
};
const obtenerTodosLosUsuarios = () => {
  //Crea tu respuesta aqui
};
//Crear una funcion tenga variables privadas y publicas
const funcionDeVariablesPrivadas = () => {};
