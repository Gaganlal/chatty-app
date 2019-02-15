// server.js

const express = require('express');
const SocketServer = require('ws').Server;
const uuidv4 = require('uuid/v4');
  
// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

  const wss = new SocketServer({ server });

  
  wss.on('connection', function connection(ws) {
    const counter = {
      type: "counter",
    count: wss.clients.size
  }
    wss.clients.forEach(function each(client) {
      client.send(JSON.stringify(counter));
    })
    ws.on('message', function incoming(data) {
      const newData = JSON.parse(data)
      const id = uuidv4();
      newData["id"]= id;
      
      // Broadcast to everyone else.
      console.log("data being parsed: ",newData)
      switch(newData.type) {
        case "postMessage": 
        newData.type= "incomingMessage"
         wss.clients.forEach(function each(client) {
           client.send(JSON.stringify(newData));
         })
        break;
        case "postNotification": 
        newData.type="incomingNotification"
          wss.clients.forEach(function each(client) {
            client.send(JSON.stringify(newData));
          });  
        break;
        };
      });
  });
