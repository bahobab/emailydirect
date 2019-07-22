import { actionTypes } from "../actions/actionTypes";

const INITIAL_STATE = {
  surveys: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SURVEYS:
      return {
        ...state,
        surveys: action.payload
      };
    default:
      return state;
  }
};
