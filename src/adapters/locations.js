const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export const getAllStates = () => {
  return fetch(BASE_API_URL + '/states')
    .then(response => response.json());
};
