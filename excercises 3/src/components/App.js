import React from 'react';
import WeatherWidget from './WeatherWidget.js'
import './styles/WeatherWidget.css'

function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

let imgArray = ['./public/icon/sun.png', './public/icon/rain.png', './public/icon/shower.png', './public/icon/snow.png', './public/icon/thunderstorm.png']

class App extends React.Component {
  render() {
    return (
      <WeatherWidget temp={randomInteger(-30, 30)} link={imgArray[randomInteger(0, 4)]} city={'Нижний Новгород'} humidity={randomInteger(50, 80)} precipitation={randomInteger(0, 2)} wind={randomInteger(0, 21)} />

    )
  }
}

export default App



