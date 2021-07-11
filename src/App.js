import React from 'react';
import { CitySearchBar } from './Components/SearchBar';
import { CityList } from './Components/CityList';
import { WeatherInfo } from './Components/WeatherInfo';
import './style/app.css'

function App() {
  return (
    <div className="App" >
        <div className="left_container">
          <CitySearchBar />
          <CityList />
        </div>
      <div className="right_container">
        <WeatherInfo />
      </div>
    </div>
  );
}

export default App;