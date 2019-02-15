import React, {Component} from 'react';
import Message from './Message.jsx';

// this function loops through messages, and returns a message component and sends a prop that includes the message. 
function MessageList(props) {
    const messageArray = props.messages.map((message, idx) => {
        return <Message message={message} key={idx} />
    })
    
    return (
        <main className="messages">
          {messageArray}
        <div className="message system">
        </div>
        </main>
    );
}
export default MessageList; 
