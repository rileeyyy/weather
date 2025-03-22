function getWeatherIconUrl(description, isDay = true, windSpeedMph = 0) {
    const lowerDesc = description.toLowerCase();
    let iconName = '';
    
    const isWindy = windSpeedMph >= 12 || lowerDesc.includes('windy');

    if (lowerDesc.includes('thunderstorm')) {
        if (lowerDesc.includes('strong') || lowerDesc.includes('severe')) {
            iconName = 'Strong Thunderstorms.png';
        } else if (lowerDesc.includes('scattered')) {
            iconName = isDay ? 'Scattered Thunderstorms (day).png' : 'Scattered Thunderstorms (night).png';
        } else if (lowerDesc.includes('isolated')) {
            iconName = isDay ? 'Isolated Thunderstorms (day).png' : 'Isolated Thunderstorms (night).png';
        } else {
            iconName = 'Thunderstorms.png';
        }
    } else if (lowerDesc.includes('drizzle')) {
        if (lowerDesc.includes('freezing')) {
            iconName = 'Freezing Rain.png';
        } else if (lowerDesc.includes('light')) {
            iconName = 'Light Rain - Showers.png';
        } else if (lowerDesc.includes('scattered') || lowerDesc.includes('chance')) {
            iconName = isDay ? 'Scattered Showers (day).png' : 'Scattered Showers (night).png';
        } else if (lowerDesc.includes('isolated')) {
            iconName = isDay ? 'Isolated Showers (day).png' : 'Isolated Showers (night).png';
        } else {
            iconName = 'Light Rain - Showers.png';
        }
    } else if (lowerDesc.includes('rain') || lowerDesc.includes('shower')) {
        if (lowerDesc.includes('light') || lowerDesc.includes('few')) {
            iconName = 'Light Rain - Showers.png';
        } else if (lowerDesc.includes('heavy')) {
            iconName = 'Heavy Rain.png';
        } else if (lowerDesc.includes('scattered')) {
            iconName = isDay ? 'Scattered Showers (day).png' : 'Scattered Showers (night).png';
        } else if (lowerDesc.includes('isolated')) {
            iconName = isDay ? 'Isolated Showers (day).png' : 'Isolated Showers (night).png';
        } else if (isWindy) {
            iconName = 'Rain and Wind.png';
        } else if (lowerDesc.includes('fog')) {
            iconName = 'Rain and Fog.png';
        } else {
            iconName = 'Rain.png';
        }
    } else if (lowerDesc.includes('snow')) {
        if (lowerDesc.includes('light') || lowerDesc.includes('few')) {
            iconName = 'Light Snow - Snow Showers.png';
        } else if (lowerDesc.includes('heavy')) {
            iconName = 'Heavy Snow.png';
        } else if (lowerDesc.includes('scattered')) {
            iconName = isDay ? 'Scattered Snow (day).png' : 'Scattered Snow (night).png';
        } else if (isWindy) {
            iconName = 'Snow and Wind.png';
        } else if (lowerDesc.includes('rain')) {
            iconName = 'Rain and Snow.png';
        } else {
            iconName = 'Snow.png';
        }
    } else if (lowerDesc.includes('sleet')) {
        if (lowerDesc.includes('rain')) {
            iconName = 'Rain and Sleet.png';
        } else {
            iconName = 'Sleet.png';
        }
    } else if (lowerDesc.includes('freezing rain')) {
        iconName = 'Freezing Rain.png';
    } else if (lowerDesc.includes('wintry mix')) {
        iconName = 'Wintry Mix.png';
    } else if (lowerDesc.includes('fog')) {
        if (lowerDesc.includes('freezing')) {
            iconName = 'Freezing Fog.png';
        } else {
            iconName = 'Foggy Conditions.png';
        }
    } else if (lowerDesc.includes('haze') || lowerDesc.includes('hazy')) {
        if (isDay) {
            iconName = 'Hazy Conditions.png';
        } else {
            iconName = 'Partly Cloudy and Hazy (night).png';
        }
    } else if (lowerDesc.includes('clear') || lowerDesc.includes('fair')) {
        if (isWindy) {
            iconName = isDay ? 'Sunny and Windy.png' : 'Clear and Windy.png';
        } else {
            iconName = isDay ? 'Sunny.png' : 'Clear.png';
        }
    } else if (lowerDesc.includes('sunny')) {
        if (lowerDesc.includes('mostly')) {
            iconName = isWindy ? 'Sunny and Windy.png' : 'Mostly Sunny.png';
        } else if (isWindy) {
            iconName = 'Sunny and Windy.png';
        } else {
            iconName = 'Sunny.png';
        }
    } else if (lowerDesc.includes('partly cloudy')) {
        if (isWindy) {
            iconName = isDay ? 'Partly Cloudy and Windy (day).png' : 'Partly Cloudy and Windy (night).png';
        } else {
            iconName = isDay ? 'Partly Cloudy (day).png' : 'Partly Cloudy (night).png';
        }
    } else if (lowerDesc.includes('mostly cloudy')) {
        if (isWindy) {
            iconName = isDay ? 'Mostly Cloudy and Windy (day).png' : 'Mostly Cloudy and Windy (night).png';
        } else {
            iconName = isDay ? 'Mostly Cloudy (day).png' : 'Mostly Cloudy (night).png';
        }
    } else if (lowerDesc.includes('cloudy')) {
        if (isWindy) {
            iconName = 'Cloudy and Windy.png';
        } else if (lowerDesc.includes('variably')) {
            iconName = isDay ? 'Variably Cloudy (day).png' : 'Variably Cloudy (night).png';
        } else {
            iconName = 'Cloudy.png';
        }
    } else if (lowerDesc.includes('tornado')) {
        iconName = 'Tornado.png';
    } else if (lowerDesc.includes('dust') || lowerDesc.includes('sand')) {
        iconName = '(Blowing) Dust.png';
    } else if (isWindy) {
        iconName = 'Windy Conditions.png';
    } else if (lowerDesc.includes('chance')) {
        if (lowerDesc.includes('rain')) {
            iconName = isDay ? 'Scattered Showers (day).png' : 'Scattered Showers (night).png';
        } else if (lowerDesc.includes('snow')) {
            iconName = isDay ? 'Scattered Snow (day).png' : 'Scattered Snow (night).png';
        } else if (lowerDesc.includes('storm')) {
            iconName = isDay ? 'Scattered Thunderstorms (day).png' : 'Scattered Thunderstorms (night).png';
        } else {
            iconName = isDay ? 'Partly Cloudy (day).png' : 'Partly Cloudy (night).png';
        }
    } else {
        iconName = 'Not Available.png';
    }
    
    return `weather_icons/${iconName}`;
}



function getWeatherByZip(zip) {
// i love exposing private api keys!
    const apiKey = '601b56574472a802cef7f6be3d5246f5';

    fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('ZIP code not found');
            }
            return response.json();
        })
        .then(data => {
            const lat = data.lat;
            const lon = data.lon;
            const name = data.name;
            return fetch(`https://api.weather.gov/points/${lat},${lon}`);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather data not available for this location');
            }
            return response.json();
        })
        .then(data => {
            processWeatherGovPointsResponse(data);
        })
        .catch(error => {
            console.error('Error fetching weather by ZIP:', error);
            document.getElementById('location-display').textContent = 'Location not found';
        });
}

function getWeatherByCity(city) {
// i love exposing private api keys!
    const apiKey = '601b56574472a802cef7f6be3d5246f5';

    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)},US&limit=1&appid=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.length > 0) {
                const lat = data[0].lat;
                const lon = data[0].lon;
                const name = data[0].name;

                return fetch(`https://api.weather.gov/points/${lat},${lon}`);
            } else {
                throw new Error('City not found');
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather data not available for this location');
            }
            return response.json();
        })
        .then(data => {
            processWeatherGovPointsResponse(data);
        })
        .catch(error => {
            console.error('Error fetching weather by city:', error);
            document.getElementById('location-display').textContent = 'City not found';
        });
}
function processWeatherGovPointsResponse(data) {
    const gridId = data.properties.gridId;
    const gridX = data.properties.gridX;
    const gridY = data.properties.gridY;
    const city = data.properties.relativeLocation.properties.city;
    const state = data.properties.relativeLocation.properties.state;

    document.getElementById('location-display').textContent = `${city}, ${state}`;

    getForecastData(gridId, gridX, gridY);

    getHourlyForecast(gridId, gridX, gridY);

    const observationStationsUrl = data.properties.observationStations;
    getStationData(observationStationsUrl);
}

function getForecastData(gridId, gridX, gridY) {
    fetch(`https://api.weather.gov/gridpoints/${gridId}/${gridX},${gridY}/forecast`)
        .then(response => response.json())
        .then(data => {
            window.forecastData = data;

            const activeTabIndex = Array.from(document.querySelectorAll('.forecast-tab'))
                .findIndex(tab => tab.classList.contains('active'));

            if (activeTabIndex === 0 || activeTabIndex === 1) {
                updateExtendedForecastDays(5);
            } else if (activeTabIndex === 2) {
                updateExtendedForecastDays(10);
            } else if (activeTabIndex === 3) {
                updateWeekendForecast();
            }
        })
        .catch(error => {
            console.error('Error fetching forecast data:', error);
        });
}

function getHourlyForecast(gridId, gridX, gridY) {
    fetch(`https://api.weather.gov/gridpoints/${gridId}/${gridX},${gridY}/forecast/hourly`)
        .then(response => response.json())
        .then(data => {
            updateHourlyForecast(data);
        })
        .catch(error => {
            console.error('Error fetching hourly forecast:', error);
        });
}

function getStationData(stationsUrl) {
    fetch(stationsUrl)
        .then(response => response.json())
        .then(data => {
            if (data.features && data.features.length > 0) {
                const stationId = data.features[0].properties.stationIdentifier;
                return fetch(`https://api.weather.gov/stations/${stationId}/observations/latest`);
            } else {
                throw new Error('No weather stations found');
            }
        })
        .then(response => response.json())
        .then(data => {
            updateCurrentConditions(data);
        })
        .catch(error => {
            console.error('Error fetching station data:', error);
        });
}

function updateCurrentConditions(data) {
    const properties = data.properties;
    if (properties) {
        const desc = properties.textDescription || '';
        const now = new Date();
        const hours = now.getHours();
        const isDay = hours >= 6 && hours < 18;
        
        const windSpeed = properties.windSpeed.value;
        const windSpeedMph = windSpeed !== null ?
            (properties.windSpeed.unitCode && properties.windSpeed.unitCode.includes('km_h') ?
                Math.round(windSpeed * 0.621371) : Math.round(windSpeed)) : 0;
        
        const iconUrl = getWeatherIconUrl(desc, isDay, windSpeedMph);
        document.getElementById('current-icon').src = iconUrl;
        document.getElementById('current-icon').alt = desc;
        
        const tempC = properties.temperature.value;
        const tempF = tempC !== null ?
            (properties.temperature.unitCode && properties.temperature.unitCode.includes('degC') ?
                Math.round((tempC * 9/5) + 32) : Math.round(tempC)) : 'N/A';
        document.getElementById('current-temp').textContent = tempF !== 'N/A' ? `${tempF}°F` : 'N/A';
        
        const feelsLikeC = properties.windChill.value !== null ? properties.windChill.value :
                          (properties.heatIndex.value !== null ? properties.heatIndex.value : properties.temperature.value);
        const feelsLikeF = feelsLikeC !== null ?
            (properties.windChill.unitCode && properties.windChill.unitCode.includes('degC') ||
             properties.heatIndex.unitCode && properties.heatIndex.unitCode.includes('degC') ||
             properties.temperature.unitCode && properties.temperature.unitCode.includes('degC') ?
                Math.round((feelsLikeC * 9/5) + 32) : Math.round(feelsLikeC)) : 'N/A';
        document.getElementById('current-feels').textContent = `Feels Like: ${feelsLikeF !== 'N/A' ? `${feelsLikeF}°F` : 'N/A'}`;
        
        document.getElementById('current-desc').textContent = desc || 'N/A';
        const humidity = properties.relativeHumidity.value;
        document.getElementById('humidity').textContent = humidity !== null ? `${Math.round(humidity)}%` : 'N/A';
        
        const windDirection = properties.windDirection.value !== null ?
            getCardinalDirection(properties.windDirection.value) : 'N/A';
        if (windSpeedMph <= 5) {
        document.getElementById('wind').textContent = windSpeedMph !== 0 ?
            `Calm` : 'N/A';
        } else {
        document.getElementById('wind').textContent = windSpeedMph !== 0 ?
            `${windDirection} ${windSpeedMph} mph` : 'N/A';
        }

            
        const pressure = properties.barometricPressure.value;
        const pressureInHg = pressure !== null ?
            (properties.barometricPressure.unitCode && properties.barometricPressure.unitCode.includes('Pa') ?
                (pressure / 3386.39).toFixed(2) : pressure.toFixed(2)) : 'N/A';
        document.getElementById('pressure').textContent = pressureInHg !== 'N/A' ? `${pressureInHg} inHg` : 'N/A';
        
        const dewPoint = properties.dewpoint.value;
        const dewPointF = dewPoint !== null ?
            (properties.dewpoint.unitCode && properties.dewpoint.unitCode.includes('degC') ?
                Math.round((dewPoint * 9/5) + 32) : Math.round(dewPoint)) : 'N/A';
        document.getElementById('dew-point').textContent = dewPointF !== 'N/A' ? `${dewPointF}°F` : 'N/A';
        
        const visibility = properties.visibility.value;
        const visibilityMi = visibility !== null ?
            (properties.visibility.unitCode && properties.visibility.unitCode.includes('m') ?
                (visibility * 0.000621371).toFixed(1) : visibility.toFixed(1)) : 'N/A';
        document.getElementById('visibility').textContent = visibilityMi !== 'N/A' ? `${visibilityMi} mi` : 'N/A';
        
        const timestamp = properties.timestamp;
        const lastUpdated = timestamp ? new Date(timestamp) : null;
        document.getElementById('current-updated').textContent = lastUpdated ?
            `Updated: ${lastUpdated.toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'})}` : 'Updated: --';
    }
}



function updateHourlyForecast(data) {
    const hourlyContainer = document.getElementById('hourly-forecast');
    hourlyContainer.innerHTML = '';
    
    if (data && data.properties && data.properties.periods) {
        const periods = data.properties.periods.slice(0, 4);
        periods.forEach(period => {
            const date = new Date(period.startTime);
            const hours = date.getHours();
            const minutes = date.getMinutes();
            let timeLabel;
            if (hours === 0 && minutes === 0) {
                timeLabel = '12 AM';
            } else if (hours === 12 && minutes === 0) {
                timeLabel = '12 PM';
            } else if (hours > 12) {
                timeLabel = `${hours - 12} PM`;
            } else {
                timeLabel = `${hours} AM`;
            }
            
            const isDay = period.isDaytime;
            
            let windSpeedMph = 0;
            if (typeof period.windSpeed === 'string') {
                const matches = period.windSpeed.match(/\d+/g);
                if (matches && matches.length > 0) {
                    windSpeedMph = parseInt(matches[matches.length > 1 ? 1 : 0]);
                }
            } else if (typeof period.windSpeed === 'number') {
                windSpeedMph = period.windSpeed;
            }
            
            const iconUrl = getWeatherIconUrl(period.shortForecast, isDay, windSpeedMph);
            
            const windDirection = period.windDirection;
            
            let windSpeed = '';
            if (typeof period.windSpeed === 'string') {
                windSpeed = period.windSpeed.replace(/\s+to\s+/, '-').replace(' mph', '');
            } else if (typeof period.windSpeed === 'number') {
                windSpeed = `${period.windSpeed}`;
            }
            
            let precipProb = 'N/A';
            if (period.probabilityOfPrecipitation && period.probabilityOfPrecipitation.value !== null) {
                precipProb = `${period.probabilityOfPrecipitation.value}%`;
            }
            
            const periodDiv = document.createElement('div');
            periodDiv.className = 'forecast-period';
            periodDiv.innerHTML = `
                <div class="period-title">${timeLabel}</div>
                <div class="period-icon"><img src="${iconUrl}" alt="${period.shortForecast}" width="40" height="40"></div>
                <div class="period-temp">${period.temperature}°F</div>
                <div class="period-desc">${period.shortForecast}</div>
                <div class="period-wind">${windDirection} ${windSpeed}</div>
                <div class="period-precip">${precipProb}</div>
            `;
            hourlyContainer.appendChild(periodDiv);
        });
    }
}

function updateExtendedForecastDays(numDays) {
    if (window.forecastData && window.forecastData.properties && window.forecastData.properties.periods) {
        const forecastContainer = document.getElementById('extended-forecast');
        forecastContainer.innerHTML = '';
        
        const periods = window.forecastData.properties.periods;
        const dayPeriods = periods.filter(period => period.isDaytime);
        const displayPeriods = dayPeriods.slice(0, numDays);
        
        displayPeriods.forEach((period, index) => {
            const date = new Date(period.startTime);
            const month = date.toLocaleString('en-US', { month: 'short' });
            const day = date.getDate();
            
            let dayName;
            if (index === 0) {
                dayName = 'Today';
            } else if (index === 1) {
                dayName = 'Tomorrow';
            } else {
                dayName = period.name.split(' ')[0];
            }
            
            let windSpeedMph = 0;
            if (typeof period.windSpeed === 'string') {
                const matches = period.windSpeed.match(/\d+/g);
                if (matches && matches.length > 0) {
                    windSpeedMph = parseInt(matches[matches.length > 1 ? 1 : 0]);
                }
            } else if (typeof period.windSpeed === 'number') {
                windSpeedMph = period.windSpeed;
            }
            
            const iconUrl = getWeatherIconUrl(period.shortForecast, period.isDaytime, windSpeedMph);
            
            const nightPeriods = periods.filter(p => !p.isDaytime);
            const nightDate = new Date(date);
            const nightPeriod = nightPeriods.find(p => {
                const pDate = new Date(p.startTime);
                return pDate.getDate() === date.getDate();
            });
            
            const lowTemp = nightPeriod ? nightPeriod.temperature : '--';
            
            let precipProb = '0%';
            if (period.probabilityOfPrecipitation && period.probabilityOfPrecipitation.value !== null) {
                precipProb = `${period.probabilityOfPrecipitation.value}%`;
            }
            
            let windSpeed = '';
            if (typeof period.windSpeed === 'string') {
                windSpeed = period.windSpeed.replace(/\s+to\s+/, '-').replace(' mph', '');
            } else if (typeof period.windSpeed === 'number') {
                windSpeed = `${period.windSpeed}`;
            }
            
            const windDirection = period.windDirection;
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="day-name">${dayName} <span class="day-date">${month} ${day}</span></td>
                <td><img src="${iconUrl}" alt="${period.shortForecast}" width="30" height="30"></td>
                <td>${period.temperature}°F</td>
                <td>${lowTemp}°F</td>
                <td>${precipProb}</td>
                <td>${windDirection} ${windSpeed} mph</td>
            `;
            forecastContainer.appendChild(row);
        });
    }
}



function updateWeekendForecast() {
    if (window.forecastData && window.forecastData.properties && window.forecastData.properties.periods) {
        const forecastContainer = document.getElementById('extended-forecast');
        forecastContainer.innerHTML = '';
        
        const periods = window.forecastData.properties.periods;
        const dayPeriods = periods.filter(period => period.isDaytime);
        
        const weekendPeriods = dayPeriods.filter(period => {
            const date = new Date(period.startTime);
            const day = date.getDay();
            return day === 0 || day === 6; 
        });
        
        if (weekendPeriods.length === 0) {
            forecastContainer.innerHTML = `
                <tr>
                    <td colspan="6" style="text-align: center; padding: 20px;">
                        No weekend forecast available in the current data.
                    </td>
                </tr>
            `;
            return;
        }
        
        weekendPeriods.forEach((period) => {
            const date = new Date(period.startTime);
            const month = date.toLocaleString('en-US', { month: 'short' });
            const day = date.getDate();
            const dayName = date.getDay() === 0 ? 'Sunday' : 'Saturday';
            
            let windSpeedMph = 0;
            if (typeof period.windSpeed === 'string') {
                const matches = period.windSpeed.match(/\d+/g);
                if (matches && matches.length > 0) {
                    windSpeedMph = parseInt(matches[matches.length > 1 ? 1 : 0]);
                }
            } else if (typeof period.windSpeed === 'number') {
                windSpeedMph = period.windSpeed;
            }
            
            const iconUrl = getWeatherIconUrl(period.shortForecast, period.isDaytime, windSpeedMph);
            
            const nightPeriods = periods.filter(p => !p.isDaytime);
            const nightDate = new Date(date);
            const nightPeriod = nightPeriods.find(p => {
                const pDate = new Date(p.startTime);
                return pDate.getDate() === date.getDate();
            });
            
            const lowTemp = nightPeriod ? nightPeriod.temperature : '--';
            
            let precipProb = '0%';
            if (period.probabilityOfPrecipitation && period.probabilityOfPrecipitation.value !== null) {
                precipProb = `${period.probabilityOfPrecipitation.value}%`;
            }
            
            let windSpeed = '';
            if (typeof period.windSpeed === 'string') {
                windSpeed = period.windSpeed.replace(/\s+to\s+/, '-').replace(' mph', '');
            } else if (typeof period.windSpeed === 'number') {
                windSpeed = `${period.windSpeed}`;
            }
            
            const windDirection = period.windDirection;
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="day-name">${dayName} <span class="day-date">${month} ${day}</span></td>
                <td><img src="${iconUrl}" alt="${period.shortForecast}" width="30" height="30"></td>
                <td>${period.temperature}°F</td>
                <td>${lowTemp}°F</td>
                <td>${precipProb}</td>
                <td>${windDirection} ${windSpeed} mph</td>
            `;
            forecastContainer.appendChild(row);
        });
    }
}




function setupTabs() {
    const tabs = document.querySelectorAll('.forecast-tab');
    const forecastSection = document.querySelector('.forecast-section');
    const extendedForecast = document.querySelector('.extended-forecast');

    const monthTab = document.querySelector('.forecast-tab:nth-child(5)');
    if (monthTab) {
        monthTab.remove();
    }

    document.querySelectorAll('.forecast-tab').forEach((tab, index) => {
        tab.addEventListener('click', function() {

            document.querySelectorAll('.forecast-tab').forEach(t => t.classList.remove('active'));


            this.classList.add('active');


            switch(index) {
                case 0:
                    forecastSection.style.display = 'block';
                    extendedForecast.style.display = 'block';
                    extendedForecast.querySelector('.extended-header').textContent = '5-day forecast';
                    updateExtendedForecastDays(5);
                    break;

                case 1:
                    forecastSection.style.display = 'none';
                    extendedForecast.style.display = 'block';
                    extendedForecast.querySelector('.extended-header').textContent = '5-day forecast';
                    updateExtendedForecastDays(5);
                    break;

                case 2:
                    forecastSection.style.display = 'none';
                    extendedForecast.style.display = 'block';
                    extendedForecast.querySelector('.extended-header').textContent = '10-day forecast';
                    updateExtendedForecastDays(10);
                    break;

                case 3:
                    forecastSection.style.display = 'none';
                    extendedForecast.style.display = 'block';
                    extendedForecast.querySelector('.extended-header').textContent = 'weekend forecast';
                    updateWeekendForecast();
                    break;
            }
        });
    });
}

function getCardinalDirection(degrees) {
    if (degrees === null) return 'N/A';

    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE',
                        'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    const index = Math.round(degrees / 22.5) % 16;
    return directions[index];
}



document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-button').addEventListener('click', function() {
        const searchInput = document.getElementById('location-input').value.trim();

        if (searchInput) {
            if (/^\d{5}$/.test(searchInput)) {
                getWeatherByZip(searchInput);
                updateUrlParameter('zip', searchInput);
                removeUrlParameter('city');
            } else {
                getWeatherByCity(searchInput);
                updateUrlParameter('city', searchInput);
                removeUrlParameter('zip');
            }
        }
    });

    document.getElementById('location-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.getElementById('search-button').click();
        }
    });

    setupTabs();

    const urlParams = new URLSearchParams(window.location.search);
    const zipParam = urlParams.get('zip');
    const cityParam = urlParams.get('city');

    if (zipParam) {
        document.getElementById('location-input').value = zipParam;
        getWeatherByZip(zipParam);
    } else if (cityParam) {
        document.getElementById('location-input').value = cityParam;
        getWeatherByCity(cityParam);
    } else {
        getWeatherByCity('New York');
    }
});



function updateUrlParameter(key, value) {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.replaceState({}, '', url);
}

function removeUrlParameter(key) {
    const url = new URL(window.location.href);
    url.searchParams.delete(key);
    window.history.replaceState({}, '', url);
}
