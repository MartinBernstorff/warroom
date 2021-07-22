import React, { useState } from 'react'
import RateToday from './components/RateToday';
import TaskListMorning from './components/TaskListMorning'
import TaskListAfternoon from './components/TaskListAfternoon'
import TaskListEvening from './components/TaskListEvening'
import TaskListNone from './components/TaskListNone';

function App(props) {
  const [run, reRun] = useState({});
  console.log(run)

  var show = 0

  return (
    <div className="grid mx-auto max-w-5xl">
      <div className="grid m-2">
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
    </div>
  );
}

export default App;
