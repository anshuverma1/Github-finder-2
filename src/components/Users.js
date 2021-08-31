import React from "react";
import { useSelector } from "react-redux";
import UserItem from "./UserItem";
import { Col, Row } from "react-bootstrap";
import Spinner from "./spinner.gif";

const Users = () => {
  const { Users, loading } = useSelector((state) => state.getUsers);
  return (
    <div>
      {loading ? (
        <img src={Spinner} alt="loading" />
      ) : (
        <Row>
          {Users.map((user) => {
            return (
              <Col key={user.id} sm={4}>
                {" "}
                <UserItem user={user} />
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};

export default Users;
