import React from "react";

const UserItem = (props) => {
  const { login, avatar_url, html_url } = props.user;
  return (
    <div className="items">
      <img className="round-img" src={avatar_url} alt="profile" />
      <h3>{login}</h3>
      <a href={html_url} className="btn">
        More
      </a>
    </div>
  );
};

export default UserItem;
