import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './Messagelist.jsx';

class App extends Component {
  render() {
    return (
      <div>
      <ChatBar />
      <MessageList />
      </div>
    );
  }
}
export default App;
