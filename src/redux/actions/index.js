import axios from "axios";

export const getUsers = (searchText) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const res = await axios.get(
      `https://api.github.com/search/users?q=${searchText}`
    );
    dispatch(searchUsers(res.data.items));
    dispatch(setLoading(false));
  };
};

export const getSingleUser = (username) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const res = await axios.get(`https://api.github.com/users/${username}`);
    dispatch(getUser(res.data));
    dispatch(setLoading(false));
  };
};

export const searchUsers = (users) => {
  return {
    type: "SEARCH_USERS",
    payload: users,
  };
};

export const setLoading = (loading) => {
  return {
    type: "LOADING",
    payload: loading,
  };
};

export const getUser = (user) => {
  return {
    type: "GET_USER",
    payload: user,
  };
};
