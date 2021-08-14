import React from 'react';
import { CitySearchBar } from './Components/SearchBar';
import { WeatherInfo } from './Components/WeatherInfo';
import './style/app.css'

function App() {
  return(
    <div className="App">
      <CitySearchBar />
      <WeatherInfo />
    </div>
  )
}

export default App;