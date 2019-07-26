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
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
class Myntra extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            Mynta Card
          </NavbarBrand>
          <NavbarToggler className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar />
        </Navbar>
        <div className="row">
          <div className="col-md-4 mt-4 h-75 d-inline-block">
            <Card style={{ width: "80%", height: "40%" }}>
              <CardImg
                top
                width="100%"
                src="https://images.pexels.com/photos/247878/pexels-photo-247878.jpeg?cs=srgb&dl=adolescent-beautiful-beauty-247878.jpg&fm=jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>DressBerry </CardTitle>
                <CardSubtitle>Top</CardSubtitle>
                <CardText>
                  Rs. 554 <strike>Rs. 1499 </strike>(63% OFF)
                </CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Myntra;
