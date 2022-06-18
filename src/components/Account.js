import React from "react";

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Thanh",
            balance: 1000
        };

        this.withdraw = this.withdraw.bind(this); //ràng buộc trong constructor
    }

    // withdraw() {
    //     this.setState({balance:900});
    // }

    withdraw() {
        this.setState( (state, props) => ({
            balance:state.balance + props.incre
        }));
    }

    //chạy ngầm trong khi load trang
    componentDidMount() {
        console.log("testing");
    }

    render() {
        return (
            <div>
                <h2> name: {this.state.name}</h2>
                <h2> balance: {this.state.balance}</h2>
                <button onClick={this.withdraw}>click me</button>
            </div>
        )
    }
}

export default Account;