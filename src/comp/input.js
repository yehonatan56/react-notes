import React, { Component } from 'react';
import ListNotes from './listNotes';
class Inputcomp extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            text: '',
            ModeButton: false,
         };
        this.setStateInput = this.setStateInput.bind(this);
        this.setStateButton = this.setStateButton.bind(this);
        }
    setStateInput(e){
        this.setState({
            text: e.target.value
        });

        
    }
    setStateButton(e){
        e.preventDefault();
        this.saveInput();
        this.setState({
            ModeButton: true,
         })    
    }
    saveInput(notes){
        notes = localStorage.getItem("notes");
        if (!notes) {
            notes = 1;
            localStorage.setItem("notes" , notes);
        }else{
            notes++;
            localStorage.setItem("notes" , notes);
        }

        localStorage.setItem("note" + notes , this.state.text);
}
        
    render() {
        return (
            <div>
            <form  onSubmit={this.setStateButton}>
                <input required type="text" value={this.state.text} onChange={this.setStateInput}/>
                <button type="submit">send</button>
            </form>
             <ListNotes ModeButton={this.state.ModeButton}></ListNotes>
             </div>             
        );
    }
}

export default Inputcomp;