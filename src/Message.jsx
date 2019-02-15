import React, {Component} from 'react';

function Message (props) {
  if(props.message.type === "incomingMessage") {
    return (
      <div className="message">
        <span className="message-username">{props.message.username}</span>
        <span className="message-content">{props.message.content}</span>
      </div>
    );
  }

  else {
    return (
      <div className="message">
        <span> {props.message.content}</span>
      
      </div>
    );
  }
  

}

export default Message;