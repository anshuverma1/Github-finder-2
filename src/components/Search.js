import React from "react";
import { useState } from "react";
import { searchUsers, setLoading, getUsers } from "../redux/actions";
import { useDispatch } from "react-redux";

import { Alert, Button } from "react-bootstrap";
import Users from "./Users";

const Search = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [alert, setAlert] = useState(false);

  const onSubmit = (e) => {
    if (searchText.length === 0) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 5000);
      dispatch(setLoading(false));
    } else {
      dispatch(getUsers(searchText));
      setSearchText("");
    }
    e.preventDefault();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  return (
    <div>
      {alert && (
        <Alert variant="warning">⚠ Please enter something to search.</Alert>
      )}
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Enter User's Name"
          onChange={handleChange}
          value={searchText}
        />
        <Button variant="dark" className="form-btn" type="submit">
          Search
        </Button>
        <Button
          variant="secondary"
          className="form-btn"
          onClick={() => {
            dispatch(searchUsers([]));
          }}>
          Clear
        </Button>
      </form>
      <Users />
    </div>
  );
};

export default Search;
