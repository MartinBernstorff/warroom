import React, { Component } from "react";
import RateToday from './RateToday';
import TaskListMorning from './TaskListMorning'
import TaskListAfternoon from './TaskListAfternoon'
import TaskListEvening from './TaskListEvening'
import TaskListNone from './TaskListNone';
import Carousel from "react-multi-carousel";

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
              Add today's date as multiple choice option
            </div>
            <div>
              <RateToday/>
              <TaskListNone/>
              <TaskListMorning/>
              <TaskListAfternoon/>
              <TaskListEvening/>
            </div>
          </Carousel>
      </div>
    );
  }
}
 
export default Yesterday;