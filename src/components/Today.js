import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import ActivityListRecents from './ActivityListRecents';
import TaskList from './TaskList'
import KernelList from './KernelList';
import NavLinkButton from "./NavLinkButton";
import Calendar from "./Calendar";
import Taskheat from "./Taskheat";
import Todoist from "./Todoist";
import Gmail from "./Gmail";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

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
        <HashRouter>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h1 className="text-xs font-bold mt-4 text-gray-300 text-center">Most days</h1>
            <div className="grid grid-cols-2 gap-1">  
              <NavLinkButton to="/today/Calendar" text="Calendar" />
              <NavLinkButton to="/today/ActivityListRecents" text="Recents" />
              <NavLinkButton to="/today/Todoist" text="Todoist" />
              <NavLinkButton to="/today/Gmail" text="Gmail" />
            </div>
          </div>

          <div>
            <h1 className="text-xs font-bold mt-4 text-gray-300 text-center">Leisure</h1>
            <div className="grid grid-cols-2 gap-1">  
              <NavLinkButton to="/today/KernelList" text="Kernels" />
              <NavLinkButton to="/today/TaskList" text="Activity menu" />
            </div>
          </div>

          <div>
            <h1 className="text-xs font-bold mt-4 text-gray-300 text-center">Work</h1>
            <div className="grid grid-cols-2 gap-1">
              <NavLinkButton to="/today/Taskheat" text="Slack" />
              <NavLinkButton to="/today/Taskheat" text="Outlook" />
              <NavLinkButton to="/today/Taskheat" text="Taskheat" />
            </div>
          </div>
        </div>


        <Route path="/today/ActivityListRecents" component={ActivityListRecents}/>
        <Route path="/today/Calendar" component={Calendar}/>
        <Route path="/today/Taskheat" component={Taskheat}/>
        <Route path="/today/Todoist" component={Todoist}/>
        <Route path="/today/Gmail" component={Gmail}/>
        <Route path="/today/KernelList" component={KernelList}/>
        <Route path="/today/TaskList" component={TaskList}/>

            
        </HashRouter>
      </div>
      
    );
  }
}
 
export default Yesterday;