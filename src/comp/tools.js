import React, { Component } from 'react';
import Delete from './tools/delete';

class Tools extends Component {
  
    
    render() {
        return (
            <div>
               <Delete object={this.props.object} list={this.props.list}></Delete> 
            </div>
        );
    }
}

export default Tools;