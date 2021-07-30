import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import PropositionInput from './components/PropositionInput'
import "react-multi-carousel/lib/styles.css";
import Airtable from 'airtable-node'
import NavLinkButton from './components/NavLinkButton';


import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Yesterday from './components/Yesterday'
import Values from './components/Values';
import Today from './components/Today';


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
      <div className="grid mx-auto max-w-5xl">
        <div className="grid m-4 gap-4 content grid-cols-1">
          <PropositionInput
            airtable={airtable}
          />

          <ul className="flex space-x-2 w-full">  
            <li><NavLinkButton to="/yesterday" text="Yesterday" /></li>
            <li><NavLinkButton to="/values" text="Values" /></li>
            <li><NavLinkButton to="/today" text="Today" /></li>
          </ul>

          <Route path="/yesterday" component={Yesterday}/>
          <Route path="/values" component={Values}/>
          <Route path="/today" component={Today}/>

          
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
