/* eslint-disable import/prefer-default-export */
const urlBase = "https://wagon-garage-api.herokuapp.com/";
const urlEnd = "/cars";

export const FETCH_CARS = "FETCH_CARS";
export const CREATE_CAR = "CREATE_CARS";

export function createCar(body, garage, callback) {
  const request = fetch(`${urlBase}${garage}${urlEnd}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);
  return {
    type: CREATE_CAR,
    payload: request
  };
}

export function fetchCars(garage) {
  const promise = fetch(`${urlBase}${garage}${urlEnd}`)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}
