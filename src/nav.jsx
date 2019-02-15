import React, {Component} from 'react';

class Nav extends React.Component{
  render() {

    return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a> <span className= "counter">  {this.props.count} users logged in</span>
    </nav>
    )

  }
}

export default Nav;