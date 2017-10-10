const statesReducer = (state = {
    statesList: [], isLoading: false
  }, action) => {
    switch (action.type) {
      case 'LOADING_STATES':
        return Object.assign({}, state, { isLoading: true });
      case 'LOADED_STATES':
        return Object.assign({}, state, { statesList: action.payload.states, isLoading: false });
      default:
        return state;
    }
  }
;

export default statesReducer;