import { getAllMembers, getPaginatedMembers } from '../adapters/congress';
import { getMembersByZipcode } from '../adapters/zipcodes';

export const fetchMembers = (filterObj) => {
  return function (dispatch) {
    dispatch({ type: 'LOADING_MEMBERS' });
    getAllMembers(filterObj)
      .then((members) => {
        dispatch({ type: 'LOADED_MEMBERS', payload: { members: members['data'] } });
        dispatch({ type: 'SET_PAGINATION_LINKS', payload: members['links'] });
      });
  };
};

export const paginateMembers = (url) => {
  return function (dispatch) {
    dispatch({ type: 'LOADING_MEMBERS' });
    getPaginatedMembers(url)
      .then((members) => {
      console.log(members)
        dispatch({ type: 'LOADED_MEMBERS', payload: { members: members['data'] } });
        dispatch({ type: 'SET_PAGINATION_LINKS', payload: members['links'] });
      });
  };
};

export const fetchMembersByZipcode = (zipcode) => {
  return function (dispatch) {
    dispatch({ type: 'LOADING_MEMBERS' });
    getMembersByZipcode(zipcode)
      .then((members) => {
        dispatch({ type: 'LOADED_MEMBERS', payload: { members: members['data'] } });
      });
  };
};