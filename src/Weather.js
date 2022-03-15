import React from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather(){
function handleResponse(response) {
    console.log(response.data);
}



    const apiKey = "1265dc91ad607d9a6b0732ee0b4d57ed";
   let city = "Göttingen";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&{city}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
       
        </div>
        <div className="col-3">
        <input type="submit" value="Search" className="btn btn-primary w-100"/>
        </div>
        </div>
          </form>
        <h1>Göttingen</h1>
        <ul>
            <li>Tusday 07:46</li>
            <li>Mostly Sunny</li>
            </ul>
            <div className="row mt-3">
            <div className="col-6">
               
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Mostly Sunny"
                /> 
            <span className="temperature">6</span> <span className="unit">°C</span>
            
            
            </div>
            
            <div className="col-6">
                <ul>
                    <li>
                      Precipitation: 15%  
                    </li>
                    <li>
                        Humidity: 72%
                    </li>
                    <li>
                        Wind: 13 km/h%
                    </li>
                </ul>

            </div>
            </div>
        </div>
}