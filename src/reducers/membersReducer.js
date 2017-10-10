const membersReducer = (state = {
    membersList: [], filters: {}, isLoading: false
  }, action) => {
    switch (action.type) {
      case 'LOADING_MEMBERS':
        return Object.assign({}, state, { isLoading: true });
      case 'LOADED_MEMBERS':
        return Object.assing({}, state, { membersList: action.payload.members });
      default:
        return state;
    }
  }
;

export default membersReducer;