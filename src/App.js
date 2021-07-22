import React, { useState } from 'react'
import RateToday from './components/RateToday';
import TaskListMorning from './components/TaskListMorning'
import TaskListAfternoon from './components/TaskListAfternoon'
import TaskListEvening from './components/TaskListEvening'
import TaskListNone from './components/TaskListNone';
import Carousel from "react-multi-carousel";
import ValueList from './components/ValueList'
import TaskList from './components/TaskList'

import "react-multi-carousel/lib/styles.css";
const responsive = {
  mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1
  }
};

function App(props) {
  const [run, reRun] = useState({});
  console.log(run)

  var show = 0

  return (
    <div className="grid mx-auto max-w-5xl">
      <div className="grid m-2">
        <Carousel 
          responsive={responsive}
          showDots={false}
          showArrows={false}
          swipeable={true}
          draggable={true}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        >
          <div>
            <RateToday />
            <TaskListNone
              reRun={reRun}
            />
            <TaskListMorning 
              reRun={reRun}
            />
            <TaskListAfternoon
              reRun={reRun}
            />
            <TaskListEvening
              reRun={reRun}
            />
          </div>
          <div>
            <ValueList 
              filter="False"
              reRun={reRun}
            />
          </div>
          <div>
            <TaskList 
              filter="False"
              reRun={reRun}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
