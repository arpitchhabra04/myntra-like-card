import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import { Card } from "reactstrap";
import NewCard from "./afterCard";
import OldCard from "./oldCard";
class Myntra extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogged: false
    };
    this.handleChangeIn = this.handleChangeIn.bind(this);
    this.handleChangeOut = this.handleChangeOut.bind(this);
  }
  handleChangeIn() {
    this.setState({
      isLogged: true
    });
  }
  handleChangeOut() {
    this.setState({
      isLogged: false
    });
  }
  render() {
    const { isLogged } = this.state;
    let card;
    if (isLogged) {
      card = <NewCard />;
    } else {
      card = <OldCard />;
    }
    return (
      <div>
        <Navbar color="faded" light className="navColor">
          <div className="container">
            <NavbarBrand href="/" className="mr-auto">
              Mynta Card
            </NavbarBrand>
            <NavbarToggler className="mr-2" />
            <Collapse navbar />
          </div>
        </Navbar>
        <div className="container">
          <div className="row">
            <div className="col-md-3 mt-4 h-75 d-inline-block">
              <Card
                style={{ width: "80%", height: "20%" }}
                onMouseEnter={this.handleChangeIn}
                onMouseLeave={this.handleChangeOut}
              >
                {card}
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Myntra;
