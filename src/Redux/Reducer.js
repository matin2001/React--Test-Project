export const Token = (state = false, { type, payload }) => {
  switch (type) {
    case "log in":
      return payload;
    case "log out":
      return payload;
    default:
      return state;
  }
};
