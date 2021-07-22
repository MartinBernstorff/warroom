import React, {Component} from "react";
import Airtable from 'airtable-node'

const Log = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Log')

const today = new Date();
const today_string = today.toISOString().substring(0, 10);

class RateToday extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activities: []
        }
    }
    /* Get today's activities */

    componentDidMount() {
        Log.list({
            maxRecords: 999,
            pageSize: 100,
            view: "L: Review",
            cellFormat: 'json'
        })
        .then((data) => {
            this.setState({activities: data.records});
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    rateToday = (val) => {
        console.log("Rating today")

        this.setState({value: val})

        for (let i = 0; i < this.state.activities.length; i++) {
            if (this.state.activities[i].fields.["exec-date"] !== today_string) {
                Log.update(this.state.activities[i].id, {"T Well Spent?": val.toString()}).then(resp => {
                    console.log("Rating " + this.state.activities[i].id + " a " + val)
                    console.log(resp)
                })
            }
        }
    }
    
    render() {
        return (
        <div className="w-full p-2">
            <h1 className="font-medium text-black text-2xl mb-1">Did you spend yesterday well?</h1>
            <div className="grid grid-cols-8">
                <button onClick={() => this.rateToday(1)}
                        className={"rounded-l-lg border-l w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 " + (this.state.value === 1 ? "bg-gray-100" : "")}
                >
                        1
                </button>
                <button onClick={() => this.rateToday(2)}
                        className={"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 " + (this.state.value === 2 ? "bg-gray-100" : "")}
                >
                        2
                </button>
                <button onClick={() => this.rateToday(3)}
                        className={"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 " + (this.state.value === 3 ? "bg-gray-100" : "")}
                >
                        3
                </button>
                <button onClick={() => this.rateToday(4)}
                        className={"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 " + (this.state.value === 4 ? "bg-gray-100" : "")}
                >
                        4
                </button>
                <button onClick={() => this.rateToday(5)}
                        className={"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 " + (this.state.value === 5 ? "bg-gray-100" : "")}
                >
                        5
                </button>
                <button onClick={() => this.rateToday(6)}
                        className={"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 " + (this.state.value === 6 ? "bg-gray-100" : "")}
                >
                        6
                </button>
                <button onClick={() => this.rateToday(7)}
                        className={"w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 " + (this.state.value === 7 ? "bg-gray-100" : "")}
                >
                        7
                </button>
                <button onClick={() => this.rateToday(8)}
                        className={"rounded-r-lg w-full px-1 py-2 hover:bg-gray-50 text-center focus:outline-none active:shadow-sm text-sm border-r border-t border-b text-gray-400 " + (this.state.value === 8 ? "bg-gray-100" : "")}
                >
                        8
                </button>
            </div>
        </div>
        );
    }
}

export default RateToday