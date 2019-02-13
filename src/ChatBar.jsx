import React, {Component} from 'react';

function ChatBar(props) {

  const onSubmit = (event) => {
    event.preventDefault();
    const user = event.target.elements.username.value;
    const message = event.target.elements.messaging.value;
    props.addMessage(user,message);
  }
    return (
        <form onSubmit={onSubmit}>
        <footer className="chatbar">
        <input className="chatbar-username" name ="username" defaultValue={props.userName} placeholder="Your Name (Optional)" />
        <input className="chatbar-message" name="messaging" placeholder="Type a message and hit ENTER" />
        <input type="submit" value="submit" />
      </footer>
      </form>
    );
}
export default ChatBar;
