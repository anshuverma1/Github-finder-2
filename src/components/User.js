import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "../redux/actions";
import Spinner from "./spinner.gif";
import { Badge, Col, Row, Button } from "react-bootstrap";

const User = () => {
  const dispatch = useDispatch();
  const username = useParams().login;

  useEffect(() => {
    dispatch(getSingleUser(username));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { User, loading } = useSelector((state) => state.getUsers);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    location,
    hireable,
    bio,
    public_repos,
    public_gists,
    followers,
    following,
  } = User;

  return (
    <div>
      {loading ? (
        <img src={Spinner} alt="loading" />
      ) : (
        <div>
          <div className="profile">
            <Row>
              <Col>
                <div className="vr1">
                  <img
                    src={avatar_url}
                    alt="profile"
                    className="round-img-big"
                  />
                  <h3>{name}</h3>
                  {location && <p>Location: {location}</p>}
                </div>
              </Col>
              <Col>
                <div className="left">
                  <h4>{bio}</h4>
                  {company && <p>Company: {company}</p>}
                  {blog && <p>Blog: {blog}</p>}
                  <p>Hirable: {hireable ? "✔" : "❌"}</p>
                  <Button href={html_url} target="_blank">
                    Github Profile
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Badge>Followers: {followers}</Badge>{" "}
            <Badge bg="secondary">Following: {following}</Badge>{" "}
            <Badge bg="success">Public Repos: {public_repos}</Badge>{" "}
            <Badge bg="warning">Public Gists: {public_gists}</Badge>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
