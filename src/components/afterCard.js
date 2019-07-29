import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
class NewCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <CardImg
          top
          width="100%"
          src="https://images.pexels.com/photos/247878/pexels-photo-247878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Card image cap"
        />
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
      </React.Fragment>
    );
  }
}

export default NewCard;
