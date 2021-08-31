import React from "react";
import { Link } from "react-router-dom";

const UserItem = (props) => {
  const { login, avatar_url } = props.user;
  return (
    <div className="items">
      <img className="round-img" src={avatar_url} alt="profile" />
      <h3>{login}</h3>
      <Link to={`/user/${login}`} className="btn">
        More
      </Link>
    </div>
  );
};

export default UserItem;
