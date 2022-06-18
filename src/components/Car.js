import React from "react";

class Car extends React.Component {
    constructor() {
        super();
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964,
           
        };
    }

    start = (e) => {
        alert("your car is ready by " + e.type);
    }

    changeColor = () => {
        this.setState({color: this.state.color="pink"});
    }

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                    It is a {this.state.color}
                        {this.state.model}
                    from {this.state.year} <br></br>
                    <button type="button" onClick={this.start}>start</button>
                    <button type="button" onClick={this.changeColor}>change color</button>
            </div>
        )
    }
}
export default Car;