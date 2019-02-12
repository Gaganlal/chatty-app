import React, {Component} from 'react';
import Message from './Message.jsx';

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

// import React, {Component} from 'react';
// import Message from './Message.jsx';

// function MessageList(props) {
//     return (
//       <main className="messages">
//         <div className="message system"></div>

//         {props.messages.map((message, idx) => <Message message={message} key={idx} /> )}
//       </main>
//     );
// }
// export default MessageList; 