import React from "react";
import UserInfo from "./UserInfo";


// function formatDate(date) {
//     return date.toLocaleDataString();
// }

//create a new component "Comment"
function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.author} />

        <div className="Comment-text">
          {props.text}
        </div>

        <div className="Comment-date">
            <h1>{new Date().toLocaleTimeString()} </h1>
        </div>
      </div>
    );
  }
export default Comment;  
  

