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

          if (typeof resp.error !== "undefined") {
            if (resp.error.message) {
              alert(resp.error.message)
            }
          }
          document.getElementById("PropositionInput").reset();
        })
    });
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit} id="PropositionInput" className="w-full">
          <div className="flex">
            <div className="w-full mr-2">
                <input className="appearance-none w-full focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none text-md text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mr block" type="text" aria-label="Proposition" value={this.state.value} name="name" onChange={this.handleChange} />
            </div>

            <div className="flex-none">
              <input type="submit" className="w-full hover:border-light-blue-200 hover:text-light-blue-800 group items-center rounded-md text-md font-medium px-4 py-2 border border-gray-200 block" value="Submit" />
            </div>
          </div>
        </form>
      
    );
  }
}

export default PropositionInput