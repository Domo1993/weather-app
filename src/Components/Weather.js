import React from 'react';
import '../css/weather.css';

const Weather = (props) => {
	return(
		// The weather conditions are structured in a way that it only appears when the conditions are met.
		<div className="weatherDiv">

			{/*Using props as placeholders for the different states*/}
		  {props.country && props.city && <p><span>Location🧭:</span> {props.city},{props.country}</p>}
	      {props.temperature && <p><span>Current Temperature🌡️:</span> {props.temperature}°C</p>}
	      {props.minTemp && <p><span>Min Temperature🌡️:</span> {props.minTemp}°C</p>}
	      {props.maxTemp && <p><span>Max Temperature🌡️:</span> {props.maxTemp}°C</p>}
	      {props.humidity && <p><span>Humidity💦:</span> {props.humidity}%</p>}
	      {props.description && <p><span>Conditions:</span>  {props.description}</p>}
	  	  {/*Below I have converted the wind speed from miles per hour to kilometres per hour*/}
	      {props.wind && <p><span>Wind Speed💨:</span> {(Number(props.wind) * 1.609344).toFixed(2)}km/h</p>}
	      {props.error && <p id="Error">{props.error}</p>}

		</div>
	)
}

export default Weather;