import React, { Component } from 'react'
import PropTypes from 'prop-types';



class WeatherWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  render() {
    return (
      <div className='weather-widget'>
        <div className='weather-widget__top-list'>
          <div className='weather-widget__temperature'>{this.props.temp}°C</div>
          <div className='weather-widget__city'>{this.props.city}</div>
        </div>

        <img className='weather-widget__icon' src={this.props.link} />

        <div className='weather-widget__info'>
          <div className='weather-widget__humidity'>
            <div className='weather-widget__text'>Влажность</div>
            <div className='weather-widget__value'>{this.props.humidity}%</div>
          </div>
          <div className='weather-widget__precipitation'>
            <div className='weather-widget__text'>Осадки</div>
            <div className='weather-widget__value'>{this.props.precipitation}мм</div>
          </div>
          <div className='weather-widget__wind'>
            <div className='weather-widget__text'>Скорость ветра</div>
            <div className='weather-widget__value'>{this.props.wind}м/c</div>
          </div>
        </div>


      </div >
    );
  }
}

WeatherWidget.propTypes = {
  link: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
  precipitation: PropTypes.number.isRequired,
  wind: PropTypes.number.isRequired
};


export default WeatherWidget