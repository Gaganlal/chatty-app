


# Chatyapp Project

A client-side single-page application built with ReactJS, Webpack, Babel, Node.js and Web Sockets. The client-side application communicates with a server via WebSockets for multi-user real-time updates. No persistent database is involved.

## Final Product

\
!["Screenshot of when another user connects and messages "](https://github.com/Gaganlal/chatty-app/blob/master/docs/When%20another%20user%20connects%20and%20messages.png?raw=true)

## Description
- When any connected user sends a chat message, all connected users receive and display the message

- When any connected user changes their name, all connected users are notified of the name change

- Notifications are styled differently from chat messages

- Header will display the count of connected users

- When the number of connected users changes, this count will be updated for all connected users

## Dependencies

- Node.js
- Express
- React
- React-dom
- WS
- UUID
- Webpack
* [babel-loader](https://github.com/babel/babel-loader)

## Getting Started

First, clone the repo to your local machine

```
1st Server:
- Install all dependencies (using `npm install` command).
- Run the development web server using the `npm start` command.
- open http://localhost:3000 

2nd Server:
-cd to `chatty_server`.
- Install all dependencies (using `npm install` command).
- Run the development web server using the `npm start` command. 
- open http://localhost:3000

```





