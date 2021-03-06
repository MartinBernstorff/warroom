import React, { Component } from "react";
import RateToday from './RateToday';
import TaskListMorning from './TaskListMorning'
import TaskListAfternoon from './TaskListAfternoon'
import TaskListEvening from './TaskListEvening'
import TaskListNone from './TaskListNone';
import Carousel from "react-multi-carousel";
import AirtableDate from "./AirtableDate";
import ResetValues from "./ResetValues";
import TaskListNoon from "./TaskListNoon";

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
        <ResetValues />
        <Carousel 
            responsive={responsive}
            showDots={false}
            showArrows={false}
            swipeable={true}
            draggable={true}
            removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          >
            <div>
              <AirtableDate />
            </div>
            <div>
              <TaskListMorning/>
              <TaskListNoon />
              <TaskListAfternoon/>
              <TaskListEvening/>
              <TaskListNone/>
              <RateToday/>
            </div>
          </Carousel>
      </div>
    );
  }
}
 
export default Yesterday;