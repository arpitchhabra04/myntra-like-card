import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
class Myntra extends Component {
  state = {};
  render() {
    return (
      <div className="container top">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            Mynta Card
          </NavbarBrand>
          <NavbarToggler className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar />
        </Navbar>
      </div>
    );
  }
}

export default Myntra;
