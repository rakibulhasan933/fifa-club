import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Details.css";
import Female from "./../Image/female.png";
import Male from "./../Image/male.png";
import Mixed from "./../Image/mixed.jpg";
import {
  FaTwitterSquare,
  FaFacebook,
  FaYoutube,
  FaFontAwesomeFlag,
  FaFutbol,
  FaMars,
} from "react-icons/fa";
import { BsGeoAlt } from "react-icons/bs";
const LeagueDetails = () => {
  const { idLeague } = useParams();
  const [LeagueDetails, setDetails] = useState([]);

  const {
    strLeague,
    strLeagueAlternate,
    strCountry,
    intFormedYear,
    strGender,
    strSport,
    strDescriptionEN,
    strFanart1,
    strFacebook,
    strTwitter,
    strYoutube,
    strBadge,
    strBanner,
  } = LeagueDetails;

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
    )
      .then((response) => response.json())
      .then((league) => setDetails(league.leagues[0]));
  }, [idLeague]);
  // console.log(LeagueDetails);
  return (
    <div>
      <div className="Banner" style={{ backgroundImage: `url(${strBanner})` }}>
        <div className="child">
          <img src={strBadge} className="imageOfHead" alt="icons" />
        </div>
      </div>

      <div className="container">
        <div className="infoBox" style={{ marginTop: "2%" }}>
          <div className="ClubInfo d-flex justify-content-between">
            <div
              style={{ marginLeft: "10px" }}
              className="text-justify InfoMain"
            >
              <h4 className="text-start">{strLeagueAlternate || strLeague}</h4>
              <p className="text-start">
                <BsGeoAlt /> Founded: {intFormedYear}
              </p>
              <p className="text-start">
                <FaFontAwesomeFlag style={{ marginRight: "5px" }} />
                Country: {strCountry}
              </p>
              <p className="text-start">
                <FaFutbol style={{ marginRight: "5px" }} />
                Sport Type: {strSport}
              </p>
              <p className="text-start">
                <FaMars /> Gender: {strGender}
              </p>
            </div>
            <div className="images">
              {strGender === "Male" && (
                <img src={Male} alt="" style={{ float: "right" }} />
              )}
              {strGender === "Female" && (
                <img src={Female} alt="" style={{ float: "right" }} />
              )}
              {strGender === "Mixed" && (
                <img src={Mixed} alt="" style={{ float: "right" }} />
              )}
            </div>
          </div>
          <div className="text-justify">
            <em>History of {strLeagueAlternate || strLeague} </em>
            {strFanart1 && (
              <div style={{ width: "100%", textAlign: "center" }}>
                <img
                  src={strFanart1}
                  width={"50%"}
                  alt="History of This Team"
                />
              </div>
            )}

            <p style={{ marginTop: "1rem", marginBottom: "2.5rem" }}>
              {strDescriptionEN}
            </p>
          </div>

          <div className="icons">
            <nav className="footerNav">
              <li className="clearFix">
                <a href={`/Link/${strTwitter}`}>
                  <FaTwitterSquare
                    style={{ fontSize: "3rem", color: "#48dbfb" }}
                  />
                </a>
              </li>
              <li className="clearFix">
                <a href={`/Link/${strFacebook}`} target="blank">
                  <FaFacebook style={{ fontSize: "3rem", color: "blue" }} />
                </a>
              </li>
              <li className="clearFix">
                <a href={`/Link/${strYoutube}`}>
                  <FaYoutube style={{ fontSize: "3rem", color: "red" }} />
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueDetails;
