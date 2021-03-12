import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./../Home/Home";
import About from "./../About/About";
import NoMatch from "../NoMatch/NoMatch";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import LeagueDetails from "../leagueDetails/LeagueDetails";
const navLink ={ color: "#A3CB38", fontWeight: "bold" };

const Header = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="rootHeader">
            <h1 className="head top">FIFA CLUB</h1>
            <code className="text-uppercase head">
              federation of international football clubs
            </code>
          </div>

          <Home></Home>
        </Route>
        <Route path="/Home">
          <div className="rootHeader">
            <h1 className="head top">FIFA CLUB</h1>
            <code className="text-uppercase head">
              Federation Of International Football Club
            </code>
          </div>
          <Navbar expand="sm">
            <Navbar.Brand>FIFA CLUB</Navbar.Brand>

            <Nav className="mr-auto">
              <li>
                <NavLink
                  activeStyle={navLink}
                  to="/Home"
                >
                  FIFA
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={navLink}
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={navLink}
                  to="/Contact Us"
                >
                  Contact Us FIFA
                </NavLink>
              </li>
            </Nav>
          </Navbar>
          <Home></Home>
        </Route>
        <Route path="/About">
          <Navbar expand="sm">
            <Navbar.Brand>FIFA CLUB</Navbar.Brand>

            <Nav className="mr-auto">
              <li>
                <NavLink
                  activeStyle={navLink}
                  to="/Home"
                >
                  FIFA
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={navLink}
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={navLink}
                  to="/Contact Us"
                >
                  Contact Us FIFA
                </NavLink>
              </li>
            </Nav>
          </Navbar>
          <About></About>
        </Route>

        <Route path="/League/:idLeague">
          <Navbar expand="sm">
            <Navbar.Brand>FIFA CLUB</Navbar.Brand>

            <Nav className="mr-auto">
              <li>
                <NavLink
                  activeStyle={navLink}
                  to="/Home"
                >
                  FIFA
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={navLink}
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={navLink}
                  to="/Contact Us"
                >
                  Contact Us FIFA
                </NavLink>
              </li>
            </Nav>
          </Navbar>
          <LeagueDetails></LeagueDetails>
        </Route>
        <Route path="*">
          <Navbar expand="sm">
            <Navbar.Brand>FIFA CLUB</Navbar.Brand>

            <Nav className="mr-auto">
              <li>
                <NavLink
                  activeStyle={navLink}
                  to="/Home"
                >
                  FIFA
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={navLink}
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={navLink}
                  to="/Contact Us"
                >
                  Contact Us FIFA
                </NavLink>
              </li>
            </Nav>
          </Navbar>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
};

export default Header;
