import React, { Component } from 'react';

export default class Lable extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
              <label>{this.props.name}</label>
            </div>
        )
    }
}