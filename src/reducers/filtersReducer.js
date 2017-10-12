const initialState = { selectedState: null, party: 'A', name: null, congress: '' };
const filtersReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
  case 'ADD_FILTER':
    return Object.assign({}, state, action.payload);
  case 'RESET_FILTER':
    return Object.assign({}, initialState);
  default:
    return state;
  }
};

export default filtersReducer;