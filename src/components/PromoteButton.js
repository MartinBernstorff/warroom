import React , {Component} from "react";
import Airtable from 'airtable-node'

const Log = new Airtable({apiKey: 'keywMvCl7aRV4a5af'})
    .base('appMcSmdPtPWcBhIX')
    .table('Log')

class PromoteButton extends Component {
    promote = () => {
        var element = document.getElementById(this.props.id);
        element.style.opacity = "0.1";

        Log.update(this.props.id, {"Promotion": this.props.val}).then(resp => {
            console.log("Promoting " + this.props.id + "with " + this.props.val)
            console.log(resp)
            
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
            <button onClick={() => this.promote()}
                    className= "rounded-lg px-2 py-1 border active:border-gray-500 m-2 text-center focus:outline-none shadow hover:shadow-md active:shadow-sm"
                >
                    {this.props.val}
            </button>
        </div>
        );
    }
}

export default PromoteButton