const unaVez = (fn) => {
  let primeraVez = false;
  return (...params) => {
    if (!primeraVez) {
      primeraVez = true;
      fn(...params);
    }
    return;
  };
};

const perro = () => console.log("Wof");
const miPerro = unaVez(perro);
miPerro();
miPerro();
miPerro();
miPerro();
miPerro();
