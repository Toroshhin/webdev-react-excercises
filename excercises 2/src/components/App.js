import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import InputPhone from './InputPhone';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.state = {
      inputValue: '',
      validNumber: false
    };
  }

  handleChange(inputValue) {
    this.setState({ inputValue });
  }



  validate() {
    const regex = /[+7(][0-9]{3}[)] [0-9]{3}[-][0-9]{2}[-][0-9]{2}/g;
    const valid = regex.test(this.state.inputValue)
    this.setState({ validNumber: valid });
  }

  render() {
    const inputValue = this.state.inputValue;
    const valid = this.state.validNumber;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '170px',
          margin: '0 auto'
        }}
      >
        <Input placeholder='Имя' />
        <InputPhone
          value={inputValue}
          onChangeInput={this.handleChange} />
        {
          valid ? (
            <><Input placeholder='Код из смс' />
              <Button value={'Подтвердить'} /></>
          ) : (<Button onClick={this.validate} value={'Отправить'} />)
        }
      </div >
    );
  }
}

export default App;


