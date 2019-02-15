import React, {Component} from 'react';

function ChatBar(props) {
  // this function focuses on just the messages being displayed.
  const onSubmit = (event) => {
    event.preventDefault();
    const message = event.target.elements.messaging.value;
    props.addMessage(message);
  }
  //this function focuses on if the user changes his name and hits enter
  const changeName = (event) => {
    if(event.key === "Enter"){
      event.preventDefault();
      const user = event.target.value;
      props.changeName(user)
    }
  }

    return (
      <form onSubmit={onSubmit}>
        <footer className="chatbar">
          <input  onKeyDown={changeName} className="chatbar-username" name="username" defaultValue={props.userName} placeholder="Your Name (Optional)" />
          <input className="chatbar-message" name="messaging" placeholder="Type a message and hit ENTER" />
          <input type="submit" value="submit" />
        </footer>
      </form>
    );
}
export default ChatBar;
