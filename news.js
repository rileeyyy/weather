
class WeatherNews {
    constructor() {
        this.newsContainer = document.querySelector('.weather-story-text');
        this.newsLinks = document.querySelector('.news-links ul');
        this.seasonalLinks = document.querySelector('.seasonal-links ul');
        this.weatherMap = document.querySelector('.weather-map img');
        this.weatherMapLink = document.querySelector('.weather-map p a');
    }


    init() {
        this.fetchWeatherData();
        this.updateWeatherMap();
        this.setupMapEnlarge();
        this.cleanupMapSection();
    }


    async fetchWeatherData() {
        try {

            const weatherResponse = await fetch('https://api.open-meteo.com/v1/forecast?latitude=40.71&longitude=-74.01&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=America%2FNew_York');

            if (!weatherResponse.ok) {
                throw new Error('Weather API request failed');
            }

            const weatherData = await weatherResponse.json();

            this.updateWeatherStory(weatherData);

            this.updateNewsLinks();
            this.updateSeasonalLinks();

        } catch (error) {
            console.error('Error fetching weather data:', error);
            this.updateWeatherStory(null);
            this.updateNewsLinks();
            this.updateSeasonalLinks();
        }
    }


    updateWeatherStory(weatherData) {
        if (!this.newsContainer) return;

        let mainTitle, mainDescription;

        if (weatherData) {

            const currentTemp = Math.round(weatherData.current.temperature_2m);
            const weatherCode = weatherData.current.weather_code;
            const maxTemp = Math.round(weatherData.daily.temperature_2m_max[0]);
            const minTemp = Math.round(weatherData.daily.temperature_2m_min[0]);


            let tempDescription = "Frigid";
            if (currentTemp > 80) tempDescription = "Hot";
            else if (currentTemp > 70) tempDescription = "Warm";
            else if (currentTemp > 50) tempDescription = "Mild";
            else if (currentTemp > 32) tempDescription = "Cool";
            else if (currentTemp > 20) tempDescription = "Cold";

            if (weatherCode >= 95) {
                mainTitle = "Severe Thunderstorms Sweep Across Region";
                mainDescription = `Powerful storms bringing heavy rain and lightning are affecting several areas today. Current temperature is ${currentTemp}°F with a high of ${maxTemp}°F expected.`;
            } else if (weatherCode >= 71 && weatherCode <= 77) {
                mainTitle = "Winter's Early Returns: Snow Falling in Multiple Areas";
                mainDescription = `Snow is currently falling with temperatures at ${currentTemp}°F. Today's range will be from ${minTemp}°F to ${maxTemp}°F. Bundle up and drive carefully!`;
            } else if (weatherCode >= 51 && weatherCode <= 67) {
                mainTitle = "Rainy Conditions Persist Across the Region";
                mainDescription = `Rain continues to fall with current temperatures at ${currentTemp}°F. Expect temperatures between ${minTemp}°F and ${maxTemp}°F today with continued precipitation.`;
            } else if (weatherCode >= 1 && weatherCode <= 3) {
                mainTitle = `Partly Cloudy Skies with ${tempDescription} Temperatures`;
                mainDescription = `Partly cloudy conditions with temperatures currently at ${currentTemp}°F. Today's forecast shows a range from ${minTemp}°F to ${maxTemp}°F.`;
            } else {
                mainTitle = `Clear Skies and ${tempDescription} Conditions Today`;
                mainDescription = `Enjoy clear weather with current temperatures at ${currentTemp}°F. Today's high will reach ${maxTemp}°F with a low of ${minTemp}°F.`;
            }
        } else {
            mainTitle = "Winter's Early Returns";
            mainDescription = "Winter made an early entry a few weeks ago and has returned time and time again ever since, bringing cold temperatures and precipitation to many regions.";
        }

        const titleElement = this.newsContainer.querySelector('h3 a');
        const descriptionElement = this.newsContainer.querySelector('p');

        if (titleElement) {
            titleElement.textContent = mainTitle;
            titleElement.href = "https://www.weather.gov";
            titleElement.target = "_blank";
        }

        if (descriptionElement) {
            descriptionElement.textContent = mainDescription;
        }
    }


    updateNewsLinks() {
        if (!this.newsLinks) return;

        this.newsLinks.innerHTML = '';

        const now = new Date();
        const month = now.toLocaleString('default', { month: 'long' });

        const newsItems = [
            {
                title: `Weather right now: Tracking major systems nationwide`,
                url: "https://www.weather.gov"
            },
            {
                title: `Climate report: ${month}'s temperatures break records`,
                url: "https://climate.nasa.gov/news"
            },
            {
                title: `Seasonal outlook: What to expect this ${this.getCurrentSeason()}`,
                url: "https://www.cpc.ncep.noaa.gov/"
            },
            {
                title: "Extreme weather events increasing worldwide, study finds",
                url: "https://www.climate.gov/news-features"
            },
            {
                title: "Air quality alerts issued for western regions",
                url: "https://www.airnow.gov/"
            },
            {
                title: "Hurricane season preparation: What you need to know",
                url: "https://www.nhc.noaa.gov/prepare/ready.php"
            }
        ];

        const shuffled = [...newsItems].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);

        selected.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.textContent = item.title;
            a.target = "_blank";
            li.appendChild(a);
            this.newsLinks.appendChild(li);
        });
    }


    getCurrentSeason() {
        const now = new Date();
        const month = now.getMonth();

        if (month >= 2 && month <= 4) return "Spring";
        if (month >= 5 && month <= 7) return "Summer";
        if (month >= 8 && month <= 10) return "Fall";
        return "Winter";
    }


    updateSeasonalLinks() {
        if (!this.seasonalLinks) return;


        this.seasonalLinks.innerHTML = '';

        const seasonalLinks = [
            { title: "Tropical Update", url: "https://www.nhc.noaa.gov/" },
            { title: "Storm Watch", url: "https://www.weather.gov/safety/thunderstorm" }
        ];

        const season = this.getCurrentSeason();
        if (season === "Winter") {
            seasonalLinks.push({ title: "Winter Weather Alerts", url: "https://www.weather.gov/safety/winter" });
        } else if (season === "Summer") {
            seasonalLinks.push({ title: "Heat Safety Tips", url: "https://www.weather.gov/safety/heat" });
        } else if (season === "Spring") {
            seasonalLinks.push({ title: "Flood Warnings", url: "https://www.weather.gov/safety/flood" });
        } else {
            seasonalLinks.push({ title: "Fire Weather", url: "https://www.weather.gov/fire/" });
        }

        seasonalLinks.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = item.url;
            a.textContent = item.title;
            a.target = "_blank";
            li.appendChild(a);
            this.seasonalLinks.appendChild(li);
        });
    }

    updateWeatherMap() {
        if (!this.weatherMap) return;

        const timestamp = new Date().getTime();
        this.weatherMap.src = `https://www.wpc.ncep.noaa.gov/noaa/noaad1.gif?${timestamp}`;
        this.weatherMap.alt = "Current Surface Map";

        this.weatherMap.onerror = () => {
            this.weatherMap.src = "./Assets/forecast.png";
            this.weatherMap.alt = "Current Surface Map";
        };
    }


    setupMapEnlarge() {
        if (this.weatherMapLink) {
            this.weatherMapLink.addEventListener('click', (e) => {
                e.preventDefault();

                const modal = document.createElement('div');
                modal.style.position = 'fixed';
                modal.style.top = '0';
                modal.style.left = '0';
                modal.style.width = '100%';
                modal.style.height = '100%';
                modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
                modal.style.display = 'flex';
                modal.style.justifyContent = 'center';
                modal.style.alignItems = 'center';
                modal.style.zIndex = '1000';

                const enlargedImg = document.createElement('img');
                enlargedImg.src = this.weatherMap.src;
                enlargedImg.style.maxWidth = '90%';
                enlargedImg.style.maxHeight = '90%';
                enlargedImg.style.border = '2px solid white';

                modal.addEventListener('click', () => {
                    document.body.removeChild(modal);
                });

                modal.appendChild(enlargedImg);
                document.body.appendChild(modal);
            });
        }
    }


    cleanupMapSection() {
        const mapSection = document.querySelector('.weather-map');
        if (mapSection) {

            const paragraphs = mapSection.querySelectorAll('p');

            if (paragraphs.length > 0) {
                const firstP = paragraphs[0];
            }
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const weatherNews = new WeatherNews();
    weatherNews.init();
});
