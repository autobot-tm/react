import React from "react";

class ContainerComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "my blog",
            content: "i love orchids...."
        }
    }
    render() {
        return (
            <div>
                <PresentationComponent title={this.state.title} content={this.state.content}/>
            </div>
        );
    }
}
export default ContainerComponent;

function PresentationComponent(props){
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>
    );
}