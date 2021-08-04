import React , {Component} from "react";
import Airtable from 'airtable-node'
import RateButton from './RateButton'

const Log = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Log')

const today = new Date();
const today_string = today.toISOString().substring(8,10) + "/" + today.toISOString().substring(5,7);

String.prototype.toHHMM = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes;
}

class ActivityCard extends Component {
    replan = () => {
        var element = document.getElementById(this.props.id);
        console.log(this.props.name + " " + this.props.promotion)
        element.style.opacity = "0.2";
        
        Log.create({"fields": {
            "What?": this.props.what_id,
            "Context": "Leisure",
            "exec-date": today_string,
            "Group #": 5
        }}).then(
            resp => {
                console.log(resp)
                element.style.borderColor = "yellow";
                element.style.borderWidth = "medium";
            }
        )
    }

    delete = () => {
        var element = document.getElementById(this.props.id);
        element.style.opacity = "0.2";

        Log.delete(this.props.id).then(resp => {
            console.log(resp)
            
            element.style.borderColor = "red";
            element.style.borderWidth = "medium";
        }

        )
    }

    /* let atHref = "https://airtable.com/tblJy7BTWYrsbf5M5/viwO8FxxQGtiJGwTh" + this.props.id; */

    openInAt = () => {
        console.log("Opening in Airtable")
        window.open("https://airtable.com/tblJy7BTWYrsbf5M5/viwO8FxxQGtiJGwTh/" + this.props.id)
    }
    
    render() {
        return (
        <div>
            <a href = {this.href} className={"active:border-gray-500 group block rounded-lg p-2 sm:p-2 hover:border-gray-300 m-0 text-left border " + (this.props.promotion > 0 ? "opacity-25" : "")} id={this.props.id}>
                <div className="flex gap-2 items-stretch">
                    <div className="grid w-5/12 items-center grid-cols-6">
                        <div className="col-span-5 text-sm">
                                {this.props.name}
                                <div className="text-xs text-gray-300">{this.props.notes}</div>
                        </div>

                        <div className="justify-end text-gray-200 font-light text-sm">
                        {(typeof this.props.duration !== "undefined" ? this.props.duration.toString().toHHMM() : "")} 
                        </div>
                    </div>

                    <div className="w-7/12 flex gap-2">
                        <div className="w-9/12 grid grid-cols-8">
                            <RateButton val="1" id={this.props.id} rating={this.props.rating} style="rounded-l-lg border-l"/>
                            <RateButton val="2" id={this.props.id} rating={this.props.rating} />
                            <RateButton val="3" id={this.props.id} rating={this.props.rating} />
                            <RateButton val="4" id={this.props.id} rating={this.props.rating} />
                            <RateButton val="5" id={this.props.id} rating={this.props.rating} />
                            <RateButton val="6" id={this.props.id} rating={this.props.rating} />
                            <RateButton val="7" id={this.props.id} rating={this.props.rating} />
                            <RateButton val="8" id={this.props.id} style="rounded-r-lg"/>
                        </div>

                        <div className="w-3/12 grid grid-cols-3 gap-2 h-4">
                            <button onClick={() => this.delete()} className="border rounded-lg w-full px-2 py-1 border-gray-100 active:border-gray-500 hover:bg-gray-100 text-center focus:outline-none active:shadow-sm text-xs text-gray-200">
                                D
                            </button>

                            <button onClick={() => this.replan()} className="border rounded-lg w-full px-2 py-1 border-gray-100 active:border-gray-500 hover:bg-gray-100 text-center focus:outline-none active:shadow-sm text-xs text-gray-200">
                                R
                            </button>

                            <button onClick={() => this.openInAt()} className="border rounded-lg w-full px-2 py-1 border-gray-100 active:border-gray-500 hover:bg-gray-100 text-center focus:outline-none active:shadow-sm text-xs text-gray-200">
                                A
                            </button>
                        </div>
                    </div>
                </div>
            </a>
                
        </div>
        );
    }
}

export default ActivityCard