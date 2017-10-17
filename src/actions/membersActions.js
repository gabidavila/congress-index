import { getAllMembers } from '../adapters/congress';
import { getMembersByZipcode } from "../adapters/zipcodes";

export const fetchMembers = (filterObj) => {
  return function (dispatch) {
    dispatch({ type: 'LOADING_MEMBERS' });
    getAllMembers(filterObj)
      .then((members) => {
        dispatch({ type: 'LOADED_MEMBERS', payload: { members: members['data'] } });
      });
  };
};

export const fetchMembersByZipcode = (zipcode) => {
  return function (dispatch) {
    dispatch({ type: 'LOADING_MEMBERS' });
    getMembersByZipcode(zipcode)
      .then((members) => {
        console.log(members);
        dispatch({ type: 'LOADED_MEMBERS', payload: { members: members['data'] } });
      });
  };
};

export const setPagination = (paginationMeta) => {
  return { type: 'CHANGE_PAGE', payload: paginationMeta };
};
