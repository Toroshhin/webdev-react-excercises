import React, { Component } from 'react';
import NumberFormat from 'react-number-format';




export default class InputPhone extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '',
      numberValid: false
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })

  }

  validate() {
    // prettier-ignore
    const regex = /^[(][0-9]{3}[)] [0-9]{3}[-][0-9]{2}[-][0-9]{2}/g;
    return regex.test(this.state.input);
  }

  render() {
    return (


      <div>
        <h3>Ваш номер</h3>
        <NumberFormat
          format="+7(###) ###-##-##" mask="_"
          name="Введите номер"
          placeholder='+7(___)___-__-__'
          onChange={this.handleChange}
          style={{ borderColor: this.validate() ? 'green' : 'red' }}
        />


        <p>{this.state.input}</p>
      </div>
    )
  }


}