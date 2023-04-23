import { DETAILSPOST_FETCH } from "./detailsAction";

const initialState = {
  detailsPost: {},
};

const detailsPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAILSPOST_FETCH:
      return {
        ...state,
        detailsPost: action.payload,
      };
    default:
      return state;
  }
};

export default detailsPostReducer;
