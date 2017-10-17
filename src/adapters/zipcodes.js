const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export const getMembersByZipcode = (zipcode) => {
  return fetch(BASE_API_URL + '/zipcodes/districts/search?zipcode=' + zipcode)
    .then((response) => response.json());
};