const filtersReducer = (state = { selectedState: null, party: 'A', name: null, congress: null }, action) => {
  switch (action.type) {
  case 'ADD_FILTER':
    return Object.assign({}, state, action.payload);
  default:
    return state;
  }
};

export default filtersReducer;