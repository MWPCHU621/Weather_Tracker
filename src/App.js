import React from 'react';
import logo from './logo.svg';
import { CitySearchBar } from './Components/SearchBar';
import { CityList } from './Components/CityList';
import { WeatherInfo } from './Components/WeatherInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Left_Container">
        <CitySearchBar />
        <CityList />
      </div>
      <div className="Right_Container">
        <WeatherInfo />
      </div>
    </div>
  );
}

export default App;