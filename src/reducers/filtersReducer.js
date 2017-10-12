const filtersReducer = (state = { selectedState: null, party: 'A', name: null } , action) => {
  switch (action.type) {
    case 'ADD_FILTER':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

export default filtersReducer;