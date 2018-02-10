const membersReducer = (state = {
  billsList: [], isLoading: false, offset: 0, numResults: 0
}, action) => {
  switch (action.type) {
  case 'LOADING_BILLS':
    return Object.assign({}, state, { isLoading: true });
  case 'LOADED_BILLS':
    return Object.assign({}, state, { billsList: action.payload.bills, isLoading: false });
  case 'SET_BILLS_OFFSET':
    return Object.assign({}, state, { offset: state.offset + action.payload.offset });
  case 'CLEAN_BILLS_OFFSET':
    return Object.assign({}, state, { offset: 0 });
  default:
    return state;
  }
};

export default membersReducer;
