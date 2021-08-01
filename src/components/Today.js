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
        <ul className="grid grid-rows-2 grid-cols-3 gap-2 max-w-md">
          
          <li><NavLinkButton to="/today/Calendar" text="Calendar" /></li>
          <li><NavLinkButton to="/today/Todoist" text="Todoist" /></li>
          <li><NavLinkButton to="/today/Gmail" text="Gmail" /></li>

          <li><NavLinkButton to="/today/ActivityListRecents" text="Recents" /></li>
          <li><NavLinkButton to="/today/Taskheat" text="Taskheat" /></li>
          <li><NavLinkButton to="/today/KernelList" text="Kernels" /></li>
          <li><NavLinkButton to="/today/TaskList" text="Activity menu" /></li>
        </ul>

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