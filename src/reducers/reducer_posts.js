import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST, FETCH_SEARCH } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload);
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      console.log(_.mapKeys(action.payload.data.addresses, "_id"));
      return _.mapKeys(action.payload.data.addresses, "_id");
    case FETCH_SEARCH:
    console.log("Action received", action);
      return action.payload.data;

    default:
      return state;
  }
}
