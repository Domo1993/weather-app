import React from 'react';
import '../css/input.css';

// This component displays an input text field and a button to submit the data that was inputted.
const CityInput = (props) => {
	return (
		<div className="main">
			{/*Clicking on the button calls the loadeather function*/}
			<form onSubmit={props.loadweather}>
				<input type="text" name="city" placeholder="City..." />
				<input type="text" name="country" placeholder="Country..."	id="country"/>		
				<button>Get Weather</button>
			</form>
		</div>
	)
}

export default CityInput;