import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
} from 'reactstrap';

import Login from './Login';


const WelcomeNav = (props) => {
  return (
    <div className="welcomeNav">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">rate-my-portfolio</NavbarBrand>
          <Nav className="mr-auto" navbar>
              <Login />
          </Nav>
      </Navbar>
    </div>
  );
}

export default WelcomeNav;