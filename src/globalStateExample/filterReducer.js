export const filterReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_ALL":
      return "SHOW_ALL";
    case "SHOW_COMPLETE":
      return "SHOW_COMPLETE";
    case "SHOW_INCOMPLETE":
      return "SHOW_INCOMPLETE";
    default:
      throw new Error();
  }
};
