//Designed as a sidebar that stays constant wherever a user is in the app

// Links:
// Manage Portfolio

// Notifications --

// <Messages non-function placeholder for sending messages />

// Watchlist -- Trending stocks -- do it via google finance or other API

// <TradeForm username/ID, date, ticker, quantitym, price, buy/sell, brokerOrigin, submit />

import React from "react";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../utils/Contexts.js";

const NavDiv = styled.div`
  display: inline-block;
  margin-top: 0px;
  min-width: 200px;
  background-color: white;
  min-height: 100vh;
  border-right: 1px solid lightgrey;
`;

const UL = styled.ul`
  padding-left: 5%;
  margin: 0px;
  margin-top: 100px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLink = styled(Link)`
  margin-top: 30px;
  margin-left: 0px;
  margin-bottom: 30px;
  font-size: 1.5rem;
  font-family: ;
  color: #333;
  text-decoration: none;
  :hover {
    color: red;
  }
`;

const Navbar = () => {
  const { user } = React.useContext(UserContext);

  return (
    <NavDiv className="navbar-sidebar">
      <UL>
        <StyledLink to={`/profile/${user.username}`}>
          Profile/Portfolio
        </StyledLink>
        <StyledLink>Notifications</StyledLink>
        <StyledLink to='/trending'>Trending</StyledLink>
        <StyledLink to="/tradeform">Trade [+]</StyledLink>
      </UL>
    </NavDiv>
  );
};

export default Navbar;
