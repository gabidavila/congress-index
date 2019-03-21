export const initialState = () => {
  return {
    selectedState: null,
    party: 'A',
    name: null,
    congress: '',
    page: 1,
    congressNumber: parseInt(process.env.REACT_APP_CURRENT_CONGRESS_NUMBER)
  };
};