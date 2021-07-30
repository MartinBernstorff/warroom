import React, {Component} from 'react'

import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

class NavLinkButton extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <NavLink to={this.props.to} className="flex-grow rounded-lg py-2 px-3 active:border-gray-500 hover:border-gray-300 text-center focus:outline-none active:shadow-sm text-gray-400 text-sm border">{this.props.text}</NavLink>
            </div>
        )
    }
}

export default NavLinkButton;