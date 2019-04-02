import React, { Component } from 'react';
import Image from './Image.jsx';
import Add from './Add.jsx';
import List from './List.jsx';
import './Card.css'
import Remove from './Remove.jsx';

export default class Card extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="card" >
              <Image/>
              <List/>
              <div className="row">
              <div className="col-md-6">
              <Add/>
              </div>
              <div className="col-md-6">
              <Remove/>
              </div>
              </div>
            </div>
        )
    }
}