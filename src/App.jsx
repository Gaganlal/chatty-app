import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './Messagelist.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "bob"},
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
  }

  

  componentDidMount() {
    console.log("componentDidMount <App />");
    const socket = new WebSocket("ws://localhost:3001");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }

  addMessage = (name, message) => {
    const newMessage = {username: name, content: message}
    const messages = this.state.messages.concat(newMessage)

    this.setState({messages: messages})
  }
  
  render() {

    return (
      <div>
      <ChatBar userName={this.state.currentUser.name} addMessage={this.addMessage} />
      <MessageList messages={this.state.messages} />
      </div>
    );
  }
}
export default App;
