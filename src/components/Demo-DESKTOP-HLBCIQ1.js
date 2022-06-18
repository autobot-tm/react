import React from "react"; 
import DemoComponent from "./DemoComponent";

const comment = {
    data: new Date(),
    text: 'welcome to react component',
    author: {
        name: 'autobot',
        avatarUrl: 'images/img.jps'
    }
};

export default function Tester(props) {
    return(
        <DemoComponent text = {comment.text} date = {comment.date} />
    );
}

