import React from 'react';
import '../css/header.css';

// This component just display the headers of the weather app
const Header = (props) => {
	return (
		<div id="main">
			<h1>Weather Checker</h1>
			<p> Helps you find the weather conditions in various cities </p>
			<p id="small"> (Use the abbreviations of the country's name for more accurate results) </p>
		</div>
	);
}

export default Header;
