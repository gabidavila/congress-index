const membersReducer = (state = {
  membersList: [], isLoading: false, pagination: {}
}, action) => {
  switch (action.type) {
  case 'LOADING_MEMBERS':
    return Object.assign({}, state, { isLoading: true });
  case 'LOADED_MEMBERS':
    return Object.assign({}, state, { membersList: action.payload.members, isLoading: false });
  case 'SET_PAGINATION_LINKS':
    return Object.assign({}, state, {pagination: action.payload});
  case 'CLEAN_PAGINATION':
    return Object.assign({}, state, {pagination: {}});
  default:
    return state;
  }
};

export default membersReducer;