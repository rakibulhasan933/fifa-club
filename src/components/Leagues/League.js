import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./league.css";

const League = ({ id, strLeague, strSport, strLeagueAlternate, children }) => {
  const [leagueInfo, setInfo] = useState([]);
  const { strBadge } = leagueInfo;

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
      .then((response) => response.json())
      .then((league) => setInfo(league.leagues[0]));
  }, [id]);
  const leagueCart ={ margin: "20px 10px" };
  const leagueCart2 ={width: "20rem",border: "0",boxShadow: "1px 3px 21px 5px rgba(0,0,0,0.07)"}
  const cartImg ={ width: "15rem", margin: "auto", marginTop: "20px" };
  const cartTitle ={ fontWeight: "bold", fontSize: "1.3rem" };
  const cartPra ={ color: "#656565", fontSize: "1.1rem", fontWeight: "400" };
  return (
    
    <div className="leagueCard" style={leagueCart}>
      <Card
        style={leagueCart2}
      >
        <div style={cartImg}>
          <Card.Img variant="top" src={strBadge} />
        </div>
        <Card.Body>
          <Card.Title style={cartTitle}>
            {strLeagueAlternate || strLeague}
          </Card.Title>
          <p
            style={cartPra}
          >
            Sports type: {strSport}
          </p>
          {children}
        </Card.Body>
      </Card>
    </div>
  );
};

export default League;
