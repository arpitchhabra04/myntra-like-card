import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
      <div>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div>
            <img
              top
              width="100%"
              height="40%"
              src="https://images.pexels.com/photos/247878/pexels-photo-247878.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          </div>
          <div>
            <img
              top
              width="100%"
              height="40%"
              src="https://images.pexels.com/photos/2473950/pexels-photo-2473950.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>
          <div>
            <img
              top
              width="100%"
              height="40%"
              src="https://images.pexels.com/photos/1796593/pexels-photo-1796593.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>
          <div>
            <img
              top
              width="100%"
              height="40%"
              src="https://images.pexels.com/photos/2473950/pexels-photo-2473950.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
