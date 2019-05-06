import queryString from 'query-string';

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL + '/congress';

const buildFilter = (filterObj) => {

  const offset = filterObj.offset || 0;
  const options = { offset };
  return queryString.stringify(options);

};

const getRecentBills = (filterObj) => {
  return fetch(BASE_API_URL + '/bills?' + buildFilter(filterObj))
    .then(response => response.json());
};

const getBill = (bill_id) => {
  return fetch(BASE_API_URL + '/bills/' + bill_id)
    .then(response => response.json());
};

export { getRecentBills };
