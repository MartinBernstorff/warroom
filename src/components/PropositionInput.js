import React, { useState } from 'react'
import Airtable from 'airtable-node'

const today = new Date();
const today_string = today.toISOString().substring(8,10) + "/" + today.toISOString().substring(5,7);

const Log = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Log')

const Activities = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Activities')

class PropositionInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('A form was submitted with: ' + this.state.name);

    Activities.create({"fields": {
      "Name": this.state.name
    }}).then(resp => {
      console.log(resp)
      Log.create({"fields": {
        "What?": [resp.id],
        "Context": "Leisure",
        "exec-date": today_string,
        "Group #": 5
      }}).then(resp => {
              console.log(resp)
              document.getElementById("PropositionInput").reset();
      });
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="PropositionInput">
        <label>
          <input className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 mb-2 pl-2" type="text" aria-label="Proposition" value={this.state.value} name="name" onChange={this.handleChange} />
        </label>

        <input type="submit" className="hover:border-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2" value="Submit" />
      </form>
    );
  }
}

export default PropositionInput