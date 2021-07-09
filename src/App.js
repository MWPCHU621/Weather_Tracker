import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { CitySearchBar } from './Components/SearchBar';
import { CityList } from './Components/CityList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Left_Container">
        <CitySearchBar />
        <CityList />
      </div>
      <div className="Right_Container">
        
      </div>
    </div>
  );
}

export default App;