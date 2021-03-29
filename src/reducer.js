export const initialState = {
  basket: [],
  empty: true,
};

export const actionTypes = {
  SEARCH_DATA: "SEARCH_DATA",
};

const reduce = (state, action) => {
  console.log("state,action", state, action);
  switch (action.type) {
    case actionTypes.SEARCH_DATA:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};

export default reduce;
