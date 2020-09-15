import axios from "axios";

export const URL_BACKEND = "https://5f5166885e984800161239f0.mockapi.io";


export const getCarreras = async () => {
  let response = await axios.get(`${URL_BACKEND}/carrera`);
  return response;
};

export const getCicloActual = async () => {
  let response = await axios.get(`${URL_BACKEND}/ciclo`);
  return response;
};


export const postFormulario = async (objFormulario) => {
  const response = await axios({
    method: "POST",
    data:{
      ...objFormulario
    },
    headers: {
      "Content-type": "application/json",
    },
    url: `${URL_BACKEND}/consultores`
  });
  return response;
};


export const getCamposLaborales = async () => {
  let response = await axios.get(`${URL_BACKEND}/camposLaborales`);
  // let json = await response.json();
  return response;
};