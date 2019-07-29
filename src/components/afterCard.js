import React, { Component } from "react";
import { CardText, CardBody, CardSubtitle, Button } from "reactstrap";
import SimpleSlider from "./imageSlider";
class NewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="shadow">
        {/* <CardImg top width="100%" src={<SimpleSlider />} alt="Card image cap" /> */}
        <SimpleSlider />
        <CardBody className="cardMargin">
          <Button color="danger" className="mt-3 md-3 mr-1" size="sm">
            Add To Cart
          </Button>{" "}
          <Button
            outline
            color="secondary"
            className="mt-3 md-3 padding"
            size="sm"
          >
            WishList
          </Button>{" "}
          <CardSubtitle className="mt-3 md-3">Sizes:S,M,L,XL</CardSubtitle>
          <CardText>
            <span className="title">Rs.479 </span>
            <strike>Rs. 1199</strike>(60%)
          </CardText>
        </CardBody>
      </div>
    );
  }
}

export default NewCard;
