import React, { useState } from 'react'
import PropositionInput from './components/PropositionInput'
import "react-multi-carousel/lib/styles.css";
import Airtable from 'airtable-node'
import NavLinkButton from './components/NavLinkButton';
import Propositions from './components/Propositions';


import {
  Route,
  NavLink,
  HashRouter, 
  Redirect
} from "react-router-dom";

import Yesterday from './components/Yesterday'
import Today from './components/Today'
import Values from './components/Values';
import TaskList from './components/TaskList';


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
    <HashRouter>
      <div className="grid mx-auto max-w-2xl">
        <div className="grid md:m-4 m-2 md:gap-4 gap-2 content grid-cols-1">
          <PropositionInput
            airtable={airtable}
          />

          <ul className="grid sm:grid-cols-5 grid-cols-4 gap-2">  
            <li><NavLinkButton to="/yesterday" text="Review" /></li>
            <li><NavLinkButton to="/values" text="Values" /></li>
            <li><NavLinkButton to="/today" text="Plan" /></li>
            <li><NavLinkButton to="/propositions" text="Today" /></li>
            <li><div><a href="https://airtable.com/tblJy7BTWYrsbf5M5/viwlybKN4v201IY8V?blocks=hide" className="block rounded-lg py-2 px-3 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border sm:block hidden">Schedule</a></div></li>
          </ul>

          <Route path="/yesterday" component={Yesterday}/>
          <Route path="/values" component={Values}/>
          <Route path="/today" component={Today}/>
          <Route path="/propositions" component={Propositions}/>

          <Redirect exact from="/" to="/propositions" />
          
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
