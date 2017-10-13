import { getAllMembers } from '../adapters/congress';

export const fetchMembers = (filterObj) => {
  return function (dispatch) {
    dispatch({ type: 'LOADING_MEMBERS' });
    getAllMembers(filterObj)
      .then((members) => {
        dispatch({ type: 'LOADED_MEMBERS', payload: { members: members['data'] } });
      });
  };
};