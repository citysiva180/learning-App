import { combineReducers } from "redux";
import courses from "./courseReducer";

const rootreducer = combineReducers({
  courses: courses,
});

export default rootreducer;
