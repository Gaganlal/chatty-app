import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './Messagelist.jsx';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      currentUser: {name: null},
      messages: []
    }
  }

  

  componentDidMount() {
    console.log("componentDidMount <App />");
    // creating a socket and connecting to ws server @ 3001
    const socket = new WebSocket("ws://localhost:3001");

    socket.onmessage = (event) => {
      //parsed the data bc it came in as a string
      const parsedEvent = JSON.parse(event.data)
      // added this new data to the state without removing state completely
      const newMessages = this.state.messages.concat(parsedEvent)
      // updated state to include new data but also include old
      this.setState({messages: newMessages})
      // code to handle incoming message
    }
    //when this connection is made, then updating state to include this socket
    socket.onopen = function (event) {
      this.setState({socket: socket}); 
    }.bind(this);

  
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
    // when trying to send this data to the ws server, it can only take strings, so need to convert data to string
    var myJSON = JSON.stringify(newMessage)
    this.state.socket.send(myJSON)

    // const messages = this.state.messages.concat(newMessage)
    // this.setState({messages: messages})
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
