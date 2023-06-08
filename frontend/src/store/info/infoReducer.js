const INITIAL_STATE = {
  cities: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_CITIES":
      return {
        ...state,
        cities: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
