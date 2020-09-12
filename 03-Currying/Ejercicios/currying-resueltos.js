//Ejercicios de Entrevista Crea una funcion que te permita hacer esto
const sumBase = (base) => (num) => {
  return base + num;
};
const sum = sumBase(6);
sum(22); //Resultado = 12

// Transformar a currying
const crearElementosDOM = (tag, clase, contenido) => {
  const el = document.createElement(tag);
  el.classList.add(clase);
  el.textContent = contenido;
  return el;
};
const crearElementosDOMCurry = (tag) => (clase) => (contenido) => {
  const el = document.createElement(tag);
  el.classList.add(clase);
  el.textContent = contenido;
  return el;
};
//Crear una funcion con este feature
//Crea funciones para h1 span buttons
const crearH1DOMCurry = crearElementosDOMCurry("h1");
const crearSpanDOMCurry = crearElementosDOMCurry("span");
const crearButtonDOMCurry = crearElementosDOMCurry("button");
crearH1DOMCurry()();
crearSpanDOMCurry()();
crearButtonDOMCurry()();
