//Ejercicios de Entrevista
//crea una funcion que te permita lograr esto y de el mismo resultado
product(4, 5);
product(4)(5);

//Transformar esta funcion
//para entregar solo los nombres que empiezan con j  un prefijo

const nombres = ["Dominic", "Jhona", "Juan", "Diego", "Agata"];
const nombresConPrefijo = (usuarios) => {
  return usuarios.map((u) => `no_suscrito_${u}`);
};
const EncontrarUsuariosConJ = (usuarios) => {
  return usuarios.filter((u) => u.match(/(?:^|\W)J(\w+)(?!\w)/g));
};
console.log(nombresConPrefijo(EncontrarUsuariosConJ(nombres)));
