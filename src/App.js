import React from 'react';
import { CitySearchBar } from './Components/SearchBar.tsx';
import { WeatherInfo } from './Components/WeatherInfo.tsx';
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