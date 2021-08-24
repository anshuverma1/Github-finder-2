//import axios from "axios";

export const searchUsers = (users) => {
  return {
    type: "SEARCH_USERS",
    payload: users,
  };
};

export const loading = (loading) => {
  return {
    type: "LOADING",
    payload: loading,
  };
};
