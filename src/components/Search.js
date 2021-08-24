import React from "react";
import { useState } from "react";
import { searchUsers, loading } from "../redux/actions";
import { useDispatch } from "react-redux";
import axios from "axios";
import Alert from "./Alert";

const Search = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [alert, setAlert] = useState(false);

  const users = async (text) => {
    dispatch(loading(true));
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch(searchUsers(res.data.items));
    dispatch(loading(false));
  };

  const onSubmit = (e) => {
    users(searchText);
    setSearchText("");
    e.preventDefault();
    if (searchText.length === 0) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 5000);
      dispatch(loading(false));
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  return (
    <div>
      {alert && <Alert />}
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Enter User's Name"
          onChange={handleChange}
          value={searchText}
        />
        <input type="submit" className="btn" value="Search" />
      </form>
    </div>
  );
};

export default Search;
