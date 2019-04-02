import React, { Component } from 'react';

export default class List extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <div className="card-body">        
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Price</li>
                        <li className="list-group-item">Description</li>
                    </ul>
                </div>
            </div>
        )
    }
}