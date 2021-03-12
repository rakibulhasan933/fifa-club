import React from "react";
import { Button } from "react-bootstrap";
import "./NoMatch.css";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <h1 className="notFound">404 Page Not Found</h1>
      <Button as={Link} to="/Home">
        Back To Home
      </Button>
    </div>
  );
};

export default NoMatch;
