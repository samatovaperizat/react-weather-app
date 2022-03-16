import React from 'react';
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App"> 
   <div className='container'>
  
    <Weather defaultCity="Göttingen" />
   <footer>
       This project was coded by Perizat Moldobaeva and is < a href='https://github.com/samatovaperizat/react-weather-app' target="_blank" rel="noreferrer" >open-sourced on GitHub</a>
</footer>
    </div>
    </div>
  );
}

