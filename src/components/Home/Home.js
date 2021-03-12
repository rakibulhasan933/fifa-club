import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import League from "../Leagues/League";

const Home = () => {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
      .then((response) => response.json())
      .then((data) => setLeagues(data.leagues));
  }, []);
  const tenLeague = leagues.slice(0, 24);

  return (
    <div className="HomeBody container">
      <div className="headerImage"></div>

      <div style={{backgroundColor:'black'}} className="d-flex flex-wrap justify-content-between">
        {tenLeague.map((league) => (
          <League
            key={league.idLeague}
            strLeague={league.strLeague}
            id={league.idLeague}
            strLeagueAlternate={league.strLeagueAlternate}
            strSport={league.strSport}
          >
            <Button
              as={Link}
              to={`/League/${league.idLeague}`}
              style={{ borderRadius: "0" }}
            >
              Explore -
            </Button>
          </League>
        ))}
      </div>
    </div>
  );
};

export default Home;
