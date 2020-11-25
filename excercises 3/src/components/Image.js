import React, { Component } from 'react'



class WeatherWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
<img src={this.props.src}></img>
    );
  }
}

export default WeatherWidget