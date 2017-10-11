const membersReducer = (state = {
  membersList: [], filters: { selectedState: null, party: 'A', name: null}, isLoading: false
}, action) => {
  switch (action.type) {
  case 'LOADING_MEMBERS':
    return Object.assign({}, state, { isLoading: true });
  case 'LOADED_MEMBERS':
    return Object.assign({}, state, { membersList: action.payload.members, isLoading: false });
  default:
    return state;
  }
}
;

export default membersReducer;