import React, { Component } from 'react'
import { render } from 'react-dom'

class Like extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false
    };
  }

  render() {
    const { liked } = this.state;
    return React.createElement(
      "div",
      { onClick: () => this.setState({ liked: !liked }) },
      `${liked ? "liked" : "unliked"}`
    );
  }
}

export default Like