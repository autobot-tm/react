import React from "react"; 
const comment = {
    data: new Date(),
    text: 'welcome to react component',
    author: {
        name: 'autobot',
        avatarUrl: 'images/img.jps'
    }
};
function change(date){
    return date.toString();
}
function DemoComponent(props){
    return(
        <div>
            <h2>{props.text}</h2>
            <h3>{ change(props.date)}</h3>
            <h4>{props.com.name}</h4>
        </div>
    );
}

export default function Tester(props) {
    return(
        <DemoComponent com = {comment.author}  date={comment.data} text={comment.text}/>
    );
}


