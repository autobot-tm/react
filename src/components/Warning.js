import React from "react";

class Warning extends React.Component{
    constructor(){
        super();
    }

    display = (msg) => {
        // alert('Welcome to handling event.');
        alert(msg);
    }
    render() {
        // return <button onClick={this.display}>Click me</button>
        return <button onClick={ () => this.display("abc")} >click me</button>
    }
}
export default Warning;