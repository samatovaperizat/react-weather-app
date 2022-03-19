import React, {useState} from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
   
if (loaded) {
    return (
        <div className="WeatherForecast">
        <div className="row">
            <div className="col">
               <div className="WeatherForecast-day">{forecast[0].dt}</div>
                <WeatherIcon code={forecast[0].weather[0].icon} size={48} />
                <div className="WeatherForecast-temperature">
                    <span className="WeatherForecast-temperature-max">{forecast[0].temp.max}°</span>
                 <span className="WeatherForecast-temperature-min">{forecast[0].temp.min}°</span>
                 </div>
            </div>
           </div>
        </div>
        );
} else {
    let apiKey = "6c6686f915ed3a277ddbc99a9f297cd7";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
 
 axios.get(apiUrl).then(handleResponse);
 
 return null;
}

}