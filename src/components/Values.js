import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import ValueList from './ValueList'

const responsive = {
  mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1
  }
};

class Yesterday extends Component {
  render() {
    return (
      <div>
        <Carousel 
            responsive={responsive}
            showDots={false}
            showArrows={false}
            swipeable={true}
            draggable={true}
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          >
            <div>
              <ValueList />
            </div>
          </Carousel>
      </div>
    );
  }
}
 
export default Yesterday;