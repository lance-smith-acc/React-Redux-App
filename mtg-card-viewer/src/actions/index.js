import axios from "axios";

export const fetchState = () => {
  return dispatch => {
    dispatch({ type: "FETCHING_ACTIVITY_START" });
    axios
      .get("https://api.magicthegathering.io/v1/cards", {
         params: {
            limit:50
        } 
      })
      .then(res => {
        console.log(res);
        dispatch({ type: "FETCHING_DATA_SUCCESS", payload: res.data.cards });
      })
      .catch(err => console.log(err));
  };
};

export const filterColors = e => {
    return {type: 'FILTER_COLOR', payload:e}
    }

