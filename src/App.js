import React, { Component } from 'react';
import 'isomorphic-fetch';

// Importing the different components
import Header from './Components/Header';
import CityInput from './Components/CityInput';
import Weather from './Components/Weather';

class App extends Component {

    constructor(props) {
        super(props);
        // The states are set to undefined as to not show any values starting the app
        this.state = {
            temperature: undefined,
            minTemp: undefined,
            maxTemp: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            wind: undefined,
            description: undefined,
            error: undefined
        };
    }

    // Using an asynchronous function to fetch an API
    getWeather = async (e) => {
        // prevents the page from refreshing
        e.preventDefault();

        const apiKey = '836387c49b4cf4b5180af4f772e46e8';

        // Storing the user's inputted information
        const userCity = e.target.elements.city.value;
        const userCountry = e.target.elements.country.value;
        try {
            // fetching the URL to access the weather conditions
            const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userCity},${userCountry}&appid=${apiKey}f&units=metric`);
            // Using json to be able to use the data that was fetched
            const response = await api_call.json();

            console.log(response);

            if (userCity) {
                this.setState({
                    temperature: response.main.temp,
                    minTemp: response.main.temp_min,
                    maxTemp: response.main.temp_max,
                    city: response.name,
                    country: response.sys.country,
                    humidity: response.main.humidity,
                    description: response.weather[0].description,
                    wind: response.wind.speed,
                    error: ""
                })
            }
            // If the user enters no information in the input field. The states are also reset to undefined.
            else {
                this.setState({
                    error: "Empty input field, please enter a value...",
                    temperature: undefined,
                    minTemp: undefined,
                    maxTemp: undefined,
                    city: undefined,
                    country: undefined,
                    humidity: undefined,
                    wind: undefined,
                    description: undefined,
                })
            }

            // If the user's inputted text doesn't match the fetched data or the function is unable to fetch the user's requested data. The states are also reset to undefined.
        } catch (err) {
            console.log(err)
            this.setState({
                error: "Location not found, please make sure the inputted city and/or city is spelt correctly. Or there could be a connection issue.",
                temperature: undefined,
                minTemp: undefined,
                maxTemp: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                wind: undefined,
                description: undefined,
            })
        }
    }

    render() {
        return (
            <div>

                <Header/>
                {/*Below is the user input component*/}
                <CityInput loadweather={this.getWeather}/>
                
                {/*Below are the prop variables and the respective states which are assigned to them.*/}
                <Weather
                  temperature={this.state.temperature}
                  minTemp={this.state.minTemp}
                  maxTemp={this.state.maxTemp}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  wind={this.state.wind}
                  error={this.state.error} />

            </div>
        )
    }
}


export default App;