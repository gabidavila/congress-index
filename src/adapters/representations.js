const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

const getPartiesRepresentation = () => {
  return fetch(BASE_API_URL + '/congress/parties/representation')
    .then((response) => response.json());
};

const colors = (alpha = 1) => {
  console.log(alpha);
  return {
    'DEM': `rgba(25,125,215,${alpha})`,
    'REP': `rgba(252,67,73,${alpha})`
  };
};

const transformFilling = (representationData, congress = 'house') => {
  let newFilling = {};

  representationData.forEach((data) => {
    const state = data.name;
    const ratio = data.party_count.length === 2 ? 1 - parseInt(Object.values(data.party_count[0])[0]) / parseInt(Object.values(data.party_count[1])[0]) : 1;
    const color = colors(ratio)[data.main_party];
    newFilling[state] = {
      fill: color
    };
  });

  return newFilling;
};

export { getPartiesRepresentation, transformFilling };
