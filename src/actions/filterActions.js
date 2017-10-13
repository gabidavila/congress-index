import { getAllStates } from '../adapters/locations';

export const fetchStates = () => {
  return function (dispatch) {
    dispatch({ type: 'LOADING_STATES' });
    getAllStates()
      .then((states) => {
        dispatch({ type: 'LOADED_STATES', payload: { states: states['data'] } });
      });
  };
};

export const addFilter = (filterObj) => {
  return { type: 'ADD_FILTER', payload: { ...filterObj } };
};

export const resetFilter = () => {
  return { type: 'RESET_FILTER' };
};
