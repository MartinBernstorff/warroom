import React , {Component} from "react";
import Airtable from 'airtable-node'

const Log = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Log')

class PropositionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            concluded: props.concluded
        }
    }
    
    delete = () => {
        var element = document.getElementById(this.props.id);
        element.style.opacity = "0.1";

        Log.delete(this.props.id).then(resp => {
            console.log("Deleting" + this.props.id)
            console.log(resp)
            
            element.style.borderColor = "red";
        })
    }

    hide = () => {
        var element = document.getElementById(this.props.id);
        element.classList.add("hidden")

        Log.update(this.props.id, {"hide_today": true}).then(resp => {
            console.log(resp)
        })
    }

    markComplete = () => {
        this.setState({
            concluded: 1
        })

        var element = document.getElementById(this.props.id);
        element.classList.remove("border-green-700")
        element.classList.add("border-yellow-100")
        
        Log.update(this.props.id, {"Concluded": true}).then(resp => {
            console.log(resp)
            console.log("Concluded? " + this.state.concluded)
        })
    }

    openInAt = () => {
        console.log("Opening in Airtable")
        window.open("https://airtable.com/tblJy7BTWYrsbf5M5/viwlybKN4v201IY8V/" + this.props.id)
    }
    
    render() {
        return (
        <div>
            <a href = {this.href} className={this.state.concluded === 1 ? 
                    "border border-green-700 shadow-sm active:border-gray-500 group block rounded-lg p-1 sm:p-2 text-left opacity-50 w-full -mb-1" : 
                    "shadow-sm active:border-gray-500 group block rounded-lg p-2 sm:p-4 hover:border-gray-300 m-0 sm:m-0 text-left border w-full"} id={this.props.id}
            >
                <div className="grid grid-cols-2">
                    <div>
                        <div className="pb-0">
                            <div className={this.state.concluded === 1 ? 
                                "font-medium text-xs" : 
                                "font-medium text-black text-xl sm:text-2xl"}
                            >
                                {this.props.name}
                            </div>

                            {typeof this.props.notes !== "undefined" ? (<div className={"text-xs sm:text-sm text-gray-500 m-t-3" + (this.state.concluded === 1 ? " hidden" : "")}>{this.props.notes}</div>) : ""}
                        </div>

                    </div>
                    <div>
                        <div className={"grid grid-cols-2 sm:grid-cols-4 space-x-1 mt-1 space-y-0 sm:space-y-0" + (this.state.concluded === 1 ? " hidden" : "")}>
                            <button onClick={() => this.markComplete()}
                                    className= "rounded-lg px-3 py-2 border active:border-gray-500 text-center focus:outline-none text-xs text-gray-400 hover:bg-gray-50"
                                >
                                    Mark
                            </button>

                            <button onClick={() => this.delete()}
                                    className= "rounded-lg px-3 py-2 border active:border-gray-500 text-center focus:outline-none text-xs text-gray-400 hover:bg-gray-50"
                                >
                                    Delete
                            </button>

                            <button onClick={() => this.hide()}
                                    className= "rounded-lg px-3 py-2 border active:border-gray-500 text-center focus:outline-none text-xs text-gray-400 hover:bg-gray-50"
                                >
                                    Hide
                            </button>

                            <button onClick={() => this.openInAt()}
                                    className= "rounded-lg px-3 py-2 border active:border-gray-500 text-center focus:outline-none text-xs text-gray-400 hover:bg-gray-50 hidden sm:block" 
                                >
                                    Airtable
                            </button>
                        </div>
                    </div>
                </div>
                <div className="">
                            {'goals' in this.props && typeof this.props.goals !== "undefined" ? (
                                    this.props.goals
                                        .split(",")
                                        .map((goal) => (
                                            <div className={"inline-block rounded py-1 px-1 bg-gray-300 text-white mr-1 mt-1 text-xs" +  (this.state.concluded === 1 ? " hidden" : "")}>{goal}</div>
                                        ))
                                    ) : (
                                        ""
                            )}
                </div>
            </a>
                
        </div>
        );
    }
}

export default PropositionCard