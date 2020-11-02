import React, { Component } from 'react';

class Delete extends Component {
    delete = () => {
       // document.getElementById(this.props.object)
       console.log(this.props.list);
       localStorage.removeItem("note"+ this.props.object);
    }
    render() {
        return (
            <div>
                <button onClick={this.delete}>Delete </button>
            </div>
        );
    }
}

export default Delete;