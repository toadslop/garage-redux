/* eslint-disable import/prefer-default-export */
const urlBase = "https://wagon-garage-api.herokuapp.com/";
const urlEnd = "cars";

export const FETCH_CARS = "FETCH_CARS";
export const CREATE_CAR = "CREATE_CARS";
export const FETCH_CAR = "FETCH_CAR";
export const DELETE_CAR = "DELETE_CAR";

export function deleteCar(id, callback) {
  const request = fetch(`${urlBase}/${urlEnd}/${id}`, {
    method: 'DELETE',
  }).then(response => response.json())
    .then(callback);
  return {
    type: DELETE_CAR,
    payload: request
  };
}

export function createCar(body, garage, callback) {
  const request = fetch(`${urlBase}${garage.name}/${urlEnd}`, {
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

export function fetchCar(id) {
  const promise = fetch(`${urlBase}/${urlEnd}/${id}`)
    .then(response => response.json());
  return {
    type: FETCH_CAR,
    payload: promise
  };
}

export function fetchCars(garage) {
  console.log(`${urlBase}${garage.name}/${urlEnd}`);
  const promise = fetch(`${urlBase}${garage.name}/${urlEnd}`)
    .then(response => response.json());

  return {
    type: FETCH_CARS,
    payload: promise
  };
}
