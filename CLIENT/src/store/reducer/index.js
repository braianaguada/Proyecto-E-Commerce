import { FETCH_LOCALS } from "../actions";

const initialState = {
  locals: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOCALS: {
      return {
        ...state,
        locals: action.payload,
      };
    }
    default:
      return state;
  }
}
