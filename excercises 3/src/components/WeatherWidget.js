import React, { Component } from 'react'


class WeatherWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className={'weather-widget'}>
        <div className='weather-widget__top-list'>
          <div className='weather-widget__temperature'>29"С</div>
          <div className='weather-widget__city'>Moscow</div>
        </div>
        <div className='weather-widget__icon'>Здесь значок</div>
        <div className='weather-widget__bottom-list'>
          <div className='weather-widget__humidity'>Влажность</div>
          <div className='weather-widget__pecipitation'>Осадки</div>
          <div className='weather-widget__speed-wind'>Скорость ветра</div>
        </div>
      </div>
    );
  }
}

export default WeatherWidget