import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";

import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});

export default rootReducer;
