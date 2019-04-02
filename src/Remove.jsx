import React, { Component } from 'react';
import './Remove.css'

export default class Remove extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>      
              <button className="btn btn-danger btnr">Remove</button>
            </div>
        )
    }
}