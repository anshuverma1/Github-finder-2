const initialState = {
  Users: [],
  loading: false,
};

const getUsers = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_USERS":
      return {
        ...state,
        Users: action.payload,
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default getUsers;
