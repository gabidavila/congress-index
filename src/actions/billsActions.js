import { getRecentBills } from '../adapters/bills';

export const fetchRecentBills = (offset) => {
  return function (dispatch) {
    dispatch({ type: 'LOADING_BILLS' });
    getRecentBills({ offset: offset })
      .then((billsResult) => {
        dispatch({ type: 'LOADED_BILLS', payload: { bills: billsResult.bills } });
        dispatch({ type: 'SET_BILLS_OFFSET', payload: { offset: billsResult.offset } });
      });
  };
};
