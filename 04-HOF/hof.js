const container = (fn) => (num) => {
  const parametro1 = num * 2;
  return () => fn(parametro1);
};

const resolverPatos = (param1) => console.log(`Yo tengo ${param1} patos`);

// const misPatos = container(resolverPatos);
// console.log(misPatos(5)());
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
