//Ejercicios de Entrevista
//crea una funcion que te permita lograr esto y de el mismo resultado
function product(a, b) {
  if (b || b === 0) {
    return a * b;
  } else {
    return (b) => a * b;
  }
}
console.log(product(4, 5));
console.log(product(4)(5));

//Transformar esta funcion
//para entregar solo los nombres que empiezan con j  un prefijo

const nombres = ["Dominic", "Jhona", "Juan", "Diego", "Agata"];
const nombresConPrefijo = (usuarios) => {
  return usuarios.map((u) => `no_suscrito_${u}`);
};
const EncontrarUsuariosConJ = (usuarios) => {
  return usuarios.filter((u) => u.match(/(?:^|\W)J(\w+)(?!\w)/g));
};

const filtradoConJ = (array) => (fn) => {
  const nombresConPrefijo = (usuarios) => {
    return usuarios.map((u) => `no_suscrito_${u}`);
  };
  const EncontrarUsuariosConJ = (usuarios) => {
    return usuarios.filter((u) => u.match(/(?:^|\W)J(\w+)(?!\w)/g));
  };
  const usuariosNoSuscritos = nombresConPrefijo(EncontrarUsuariosConJ(array));

  if (usuariosNoSuscritos.length > 0) {
    console.log("Acceso denegado");
  } else {
    return (args) => fn(args);
  }
};
const accesoLibre = () => console.log("Puedes pasar todo esta correcto");
filtradoConJ(nombres)(accesoLibre);
