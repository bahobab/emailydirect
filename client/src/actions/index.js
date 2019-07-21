import axios from "axios";

import { actionTypes } from "./actionTypes";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: actionTypes.USER_FETCHED, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: actionTypes.USER_FETCHED, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");
  dispatch({ type: actionTypes.USER_FETCHED, payload: res.data });
};
