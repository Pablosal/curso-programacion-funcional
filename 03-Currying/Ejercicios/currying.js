//Ejercicios de Entrevista Crea una funcion que te permita hacer esto
sum(6); //Resultado = 12

//Transformar a currying
const crearElementosDOM = (tag, clase, contenido) => {
  const el = document.createElement(tag);
  el.classList.add(clase);
  el.textContent = contenido;
  return el;
};
const crearElementosDOMCurry = () => {};

//Crear una funcion con este feature
//Crea funciones para h1 span buttons
crearH1DOMCurry()();
crearSpanDOMCurry()();
crearButtonDOMCurry()();
