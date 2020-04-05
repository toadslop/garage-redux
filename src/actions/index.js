/* eslint-disable import/prefer-default-export */
const urlBase = "https://wagon-garage-api.herokuapp.com/";
export const FETCH_CARS = "FETCH_CARS";

export function fetchCars(garage) {
  const promise = fetch(`${urlBase}${garage}/cars`)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}
