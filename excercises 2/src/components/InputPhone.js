import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

class InputPhone extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChangeInput(e.target.value);
  }
  
  

  render() {
    const value = this.props.value;
    return (
      <NumberFormat
        placeholder='+7(___) ___-__-__'
        format='+7(###) ###-##-##'
        value={value}
        onChange={this.handleChange} />
    );
  }
}

export default InputPhone;
