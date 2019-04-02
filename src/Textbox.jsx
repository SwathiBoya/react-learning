import React, { Component } from 'react';

export default class Tesxtbox extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <input type ="text" placeholder={this.props.placeholder}/>
            </div>
        )
    }
}