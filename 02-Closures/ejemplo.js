const fetch = require("./node_modules/node-fetch");

const obtenerDatosDeApi = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const mostrarDatos = async () => {
    try {
      const datos = await fetch(url);
      const json = await datos.json();
      console.log(json);
    } catch (error) {
      console.error(error);
    }
  };
  mostrarDatos();
};
obtenerDatosDeApi();
