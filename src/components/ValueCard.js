import React , {Component} from "react";
import Airtable from 'airtable-node'

const Values = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Log')

class ValueCard extends Component {
    propose = () => {
        var element = document.getElementById(this.props.id);
        element.style.opacity = "1";
        console.log(this.props.name + " " + this.props.promotion)
        
        Values.update(this.props.id, {"Promotion": 1}).then(resp => {
            console.log(resp)
            
            element.style.borderColor = "yellow";
            element.style.borderWidth = "medium";
        })
    }

    reverse = () => {
        var element = document.getElementById(this.props.id);
        element.style.opacity = "0.2";
        
        Values.update(this.props.id, {"Promotion": 0}).then(resp => {
            console.log(resp)
            
            element.style.borderColor = "LightGray";
            element.style.borderWidth = "thin";
        })
    }

    /* let atHref = "https://airtable.com/tblo6SQZQakNq4URH/viwd4XwZ1wC8esYgg" + this.props.id; */

    openInAt = () => {
        console.log("Opening in Airtable")
        window.open("https://airtable.com/tbl7pyCYwx12t7LHu/viwnPcTZz8PXg4Smt/" + this.props.id)
    }
    
    render() {
        return (
        <div>
            <a href = {this.href} className={"shadow-sm active:border-gray-500 group block rounded-lg p-4 hover:border-gray-300 m-2 text-left justify-left text-justify border " + (this.props.promotion > 0 ? "opacity-100" : "opacity-25")} id={this.props.id}>
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

                <div className="grid grid-cols-3 mt-2 space-x-2">
                    <button onClick={() => this.propose()}
                            className= {"rounded-lg px-2 py-2 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm " + (this.props.promotion > 0 ? "border-2 border-yellow-200" : "border")}
                        >
                            {(this.props.promotion > 0 ? "Endorsed" : "Endorse")}
                    </button>

                    <button onClick={() => this.reverse()}
                            className= "rounded-lg px-2 py-2 border active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm"
                        >
                            Reverse
                    </button>

                    <button onClick={() => this.openInAt()}
                            className= "rounded-lg px-2 py-2 border active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm"
                        >
                            Airtable
                    </button>
                </div>
            </a>
                
        </div>
        );
    }
}

export default ValueCard