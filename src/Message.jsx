import React, {Component} from 'react';

//this function focuses on the type of incoming message. If it is "incomingMessage" then display normally on screen, else display a notification that name changed.
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
        <span className="notification"> <strong>{props.message.content}</strong></span>
      
      </div>
    );
  }
  

}

export default Message;