function Weather({ weather }) {
    return (
        <div>
            {weather && weather.name && (
                <>
                    <h3>{weather.name}</h3>
                    <h3>{weather.main.temp}</h3>
                    <h3>Feels Like {weather.main.feels_like}</h3>
                    {weather.weather && weather.weather[0] && (
                        <h3>Description {weather.weather[0].main}</h3>
                    )}
                    <h3>Humidity {weather.main.humidity}</h3>
                </>
            )}
        </div>
    );
}

export default Weather;
