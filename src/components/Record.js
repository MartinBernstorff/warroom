import React , {Component} from "react";
import Airtable from 'airtable-node'

const Log = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Log')

const today = new Date();
const today_string = today.toISOString().substring(8,10) + "/" + today.toISOString().substring(5,7);

class Todo extends Component {
    fin = () => {
        var element = document.getElementById(this.props.id);
        element.style.opacity = "0.1";

        Log.update(this.props.id, {"Fin": true}).then(resp => {
            console.log("Mark as fin " + this.props.id)
            console.log(resp)
            
            element.style.borderColor = "red";
            element.style.borderWidth = "medium";
        })
    }

    propose = () => {
        var element = document.getElementById(this.props.id);
        element.style.opacity = "0.2";
        
        Log.create(
            {"fields": {
                "What?": [this.props.id],
                "Context": "Leisure",
                "exec-date": today_string,
                "Group #": 5
            }}
        ).then(resp => {
            console.log(resp)
            console.log("Concluded? " + this.props.concluded)
            
            element.style.borderColor = "yellow";
            element.style.borderWidth = "medium";
        })
    }

    /* let atHref = "https://airtable.com/tblo6SQZQakNq4URH/viwd4XwZ1wC8esYgg" + this.props.id; */

    openInAt = () => {
        console.log("Opening in Airtable")
        window.open("https://airtable.com/tblo6SQZQakNq4URH/viwd4XwZ1wC8esYgg/" + this.props.id)
    }
    
    render() {
        return (
        <div>
            <a href = {this.href} className="shadow-sm active:border-gray-500 group block rounded-lg p-2 sm:p-4 hover:border-gray-300 m-0 text-left border" id={this.props.id}>
            <div className="grid">
                <div className="font-medium text-black text-2xl mb-1">{this.props.name}</div>
            </div>

            <div className="space-y-0">
                    {'goals' in this.props && typeof this.props.goals !== "undefined" ? (
                            this.props.goals
                                .split(",")
                                .map((goal) => (
                                    <div className="inline-block rounded py-1 px-1 bg-gray-300 text-white mr-1" style={{fontSize: "0.6rem"}}>{goal}</div>
                                ))
                            ) : (
                                ""
                    )}
            </div>

            <div className="grid grid-cols-3 gap-2 mt-2">
                <button onClick={() => this.propose()}
                        className= "w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border"
                    >
                        Propose
                </button>

                <button onClick={() => this.fin()}
                        className= "w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border"
                    >
                        Fin
                </button>

                <button onClick={() => this.openInAt()}
                        className= "w-full rounded-lg py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border"
                    >
                        Airtable
                </button>
            </div>
            </a>
                
        </div>
        );
    }
}

export default Todo