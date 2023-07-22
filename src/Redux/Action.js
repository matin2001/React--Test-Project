export const logging_in = () => async (dispatch, getState) => {
  dispatch({
    type: "log in",
    payload: true,
  });
};

export const logging_out = () => async (dispatch, getState) => {
  dispatch({
    type: "log in",
    payload: false,
  });
};
