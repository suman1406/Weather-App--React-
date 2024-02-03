import { useState } from 'react';
import PropTypes from 'prop-types';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';
import './WeatherApp.css';

export default function WeatherApp() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const handleWeatherData = (data) => {
        setWeatherData(data);
        setError(null);
    };

    const handleError = (errorMessage) => {
        setError(errorMessage);
        setWeatherData(null);
    };

    return (
        <div className="WeatherApp">
            <h1>Weather Application</h1>
            <SearchBox onWeatherData={handleWeatherData} onError={handleError} />

            {error && <p className="error-message">{error}</p>}

            {weatherData && (
                <InfoBox
                    city={weatherData.name}
                    country={weatherData.sys.country}
                    temperature={weatherData.main.temp}
                    description={weatherData.weather[0].description}
                    icon={weatherData.weather[0].icon}
                />
            )}
        </div>
    );
}

WeatherApp.propTypes = {
    onWeatherData: PropTypes.func.isRequired,
};
