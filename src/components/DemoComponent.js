import React from "react";

function DemoComponent(props){
    return(
        <div>
            <h2>{props.com.text}</h2>
            <h3>{props.com.date}</h3>
            <h4>{props.com.author.name}</h4>
        </div>
    );
}

export default DemoComponent;

