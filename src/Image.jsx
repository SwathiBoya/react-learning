import React, { Component } from 'react';

export default class Image extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <img className="card-img-top" src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"></img>
            </div>
        )
    }
}