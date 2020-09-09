export const URL_BACKEND = "https://5f5166885e984800161239f0.mockapi.io";

export const getCamposLaborales = async () => {
  let response = await fetch(`${URL_BACKEND}/camposLaborales`);
  let json = await response.json();
  return json;
};
