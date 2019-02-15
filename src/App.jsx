import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './Messagelist.jsx';
import Nav from './nav.jsx'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      currentUser: {name: "Anon"},
      messages: [],
      counter: 0
    }
  }

  

  componentDidMount() {
    console.log("componentDidMount <App />");
    // creating a socket and connecting to ws server @ 3001
    const socket = new WebSocket("ws://localhost:3001");

    socket.onmessage = (event) => {
      //parsed the data bc it came in as a string
      const parsedEvent = JSON.parse(event.data)
      
      if(parsedEvent.type === "counter") {

        const count = parsedEvent.count;
        this.setState({counter: count})
      }
      // added this new data to the state without removing state completely
      const newMessages = this.state.messages.concat(parsedEvent)
      this.setState({messages: newMessages})
    }
    //when this connection is made, then updating state to include this socket
    socket.onopen = function (event) {
      this.setState({socket: socket}); 
    }.bind(this);

  
  }

  
// seperate function when user changes his name and clicks enter!

  changeName = (name) => {
    const originalName = this.state.currentUser.name;
    const newMessage = {
      username: this.state.currentUser.name, 
      content: `${originalName} changes their name to ${name}`,
      type: 'postNotification'
    }
 
    const inputObject = {
      name: name
    }
    this.setState({currentUser: inputObject})
    this.state.socket.send(JSON.stringify(newMessage))

  }


  addMessage = (message) => {
    // adding type: incoming message to this variable
    const newMessage = {username: this.state.currentUser.name, content: message, type: 'postMessage'}
    // when trying to send this data to the ws server, it can only take strings, so need to convert data to string
    var myJSON = JSON.stringify(newMessage)
    //send data to ws server
    this.state.socket.send(myJSON)

    // const messages = this.state.messages.concat(newMessage)
    // this.setState({messages: messages})
  }
  
  render() {

    return (
      <div>
      <Nav count={this.state.counter} />  
      <ChatBar userName={this.state.currentUser.name} addMessage={this.addMessage} changeName={this.changeName} />
      <MessageList messages={this.state.messages} />
      </div>
    );
  }
}
export default App;
