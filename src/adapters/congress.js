import queryString from 'query-string';

const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

const buildFilter = (filterObj) => {
  const party = filterObj.party || 'A';
  let options = { party, name: filterObj.name }

  if (filterObj.selectedState !== 'A') {
    options.state = filterObj.selectedState;
  } else {
    options.state = null
  }

  return queryString.stringify(options);
};

const getAllMembers = (filterObj) => {
  return fetch(BASE_API_URL + '/members?' + buildFilter(filterObj))
    .then(response => response.json());
};

const getSenateMembers = (filterObj) => {
  return fetch(BASE_API_URL + '/members/senate?' + buildFilter(filterObj))
    .then(response => response.json());
};

const getHouseMembers = (filterObj) => {
  return fetch(BASE_API_URL + '/members/house?' + buildFilter(filterObj))
    .then(response => response.json());
};

const getMemberById = (memberId) => {
  return fetch(BASE_API_URL + '/members/' + memberId)
    .then(response => response.json());
};

export { getAllMembers, getSenateMembers, getHouseMembers, getMemberById };
