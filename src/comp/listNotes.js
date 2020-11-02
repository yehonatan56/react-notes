import React, { Component } from 'react';
import Tools from './tools';
class ListNotes extends Component {
    constructor(props) {
        super(props);
        this.state = { notes: [localStorage.getItem("notes")]  };
       //this.item = React.createRef();
        this.getNotes();
        console.log(this.state.notes);
          }
          componentDidUpdate(){
            if (this.props.ModeButton === true) {
              console.log(this.state.notes);
              this.getNotes();
              return this;
            }
          }
    getNotes(){
        this.get = [];
        this.counterId = 1;
        for (let counter = localStorage.getItem("notes"); counter >= 1; counter--) {
            this.get.push(<li id={this.counterId}>{localStorage.getItem("note" + counter)}<Tools object={this.counterId} list={this.get}></Tools></li>);
            this.counterId++;
            console.log(this.counterId);
        }
        console.log(this.item);
    }
    render() {
        return (
            <div className="list">   
                <ul id="list-ul">
                 {this.get}
                 </ul>
            </div>
        );
    }
}

export default ListNotes;