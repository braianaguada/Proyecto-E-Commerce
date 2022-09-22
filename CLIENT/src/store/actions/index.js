import axios from "axios";
export const FETCH_LOCALS = "FETCH_LOCALS";

export const fetchLocals = () => (dispatch) => {
  return axios
    .get("http://localhost:3001/local/all/")
    .then((locals) => {
      dispatch({
        type: FETCH_LOCALS,
        payload: locals.data,
      });
    })
    .catch((error) => {
      console.error(error.message);
    });
};
