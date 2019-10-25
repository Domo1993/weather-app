import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
test('the data is humidity', async () => {
	// we pass the variable into the api
const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=836387c49b4cf4b5180af4f772e46e8f&units=metric`);
 //api call to fetch contents from our weather component
 const response = await api_call.json();
   expect(response.name).toBe("London");
 });