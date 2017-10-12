import { getAllStates } from '../adapters/locations';

export const fetchStates = () => {
  return function (dispatch) {
    dispatch({ type: 'LOADING_STATES' });
    getAllStates()
      .then((states) => {
        dispatch({ type: 'LOADED_STATES', payload: { states: states } });
      });
  };
};

export const addFilter = (filterObj) => {
  return function(dispatch) {
    dispatch({type: 'ADD_FILTER', payload: {...filterObj}});
  };
};