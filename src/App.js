import React, { useState } from 'react'
import RateToday from './components/RateToday';
import TaskListMorning from './components/TaskListMorning'
import TaskListAfternoon from './components/TaskListAfternoon'
import TaskListEvening from './components/TaskListEvening'
import TaskListNone from './components/TaskListNone';
import Carousel from "react-multi-carousel";
import ValueList from './components/ValueList'
import TaskList from './components/TaskList'
import PropositionInput from './components/PropositionInput'
import "react-multi-carousel/lib/styles.css";
import Airtable from 'airtable-node'
import ActivityListRecents from './components/ActivityListRecents';

var today = new Date();
var yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

var todaydd = String(today.getDate()).padStart(2, '0');
var todaymm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

var yesterdaydd = String(yesterday.getDate()).padStart(2, '0');
var yesterdaymm = String(yesterday.getMonth() + 1).padStart(2, '0'); //January is 0!

today = todaydd + "/" + todaymm;
yesterday = yesterdaydd + '/' + yesterdaymm;


const responsive = {
  mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1
  }
};

const airtable = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Log')

function App(props) {
  const [run, reRun] = useState({});
  console.log(run)

  return (
    <div className="grid mx-auto max-w-5xl">
      
      <div className="grid m-4 gap-4">
        <PropositionInput
          airtable={airtable}
        />
      
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
            <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FCopenhagen&amp;src=bWFydGluYmVybnN0b3JmZkBnbWFpbC5jb20&amp;src=NnAwNjZuMW9oYTlnbThyaTVybG4zcWMwaWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=bGYzdmlsa3RpbnZqYm1xNXEzMW1pZTV0dmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=Ym9oaHVxOWRybWV0YTM5czBydWFyMTFrZmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=aXE0Z2tkZnAxaDFmYTRpbm5hZHNiY21ob3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=OXU4amp0YmNrMHB1NTUzbWpkNGQwZWpobmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=cDl1dmRyb2NvNjc5bnZyMHN2YjQ5bGtiYThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=dmJiaW52OTExN2VocTF1ODVkN3JzaXIwc2xpaGc5ZTJAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=MjUwdTlmMmY1ZTFtanZwYTJ0cGJlbDMxMWxxMzh0dmFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=dGU4cG9wZ2NsbWw3Ymo3NDV0c2k3Z3BhZXFuaTljazFAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=NHNhNTEyYTU0anN2MDFmNHNqZTg3cDQ0b3RxaXJrbmpAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23691426&amp;color=%2300a900&amp;color=%2393afb2&amp;color=%23a50000&amp;color=%23711a76&amp;color=%230042c7&amp;color=%23009688&amp;color=%234285F4&amp;color=%23616161&amp;color=%23F6BF26&amp;color=%23039BE5&amp;showTitle=0&amp;mode=WEEK&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0" width="100%" height="800" frameborder="0" scrolling="no"></iframe>
          </div>
          <div>
            <ActivityListRecents />
            <TaskList 
              filter="False"
              reRun={reRun}
            />
          </div>
          <div>
            Taskheat
          </div>
          <div>
            Todoist
          </div>
          <div>
            Gmail
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
