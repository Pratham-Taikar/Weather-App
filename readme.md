# Weather Tracker App

## Overview

The **Weather Tracker App** is a web application designed to provide users with real-time weather information. It offers various features such as hourly and weekly forecasts, weather condition icons and animations, geolocation, data visualization, dynamic backgrounds, and more.

## Here's the Live Demo of the app - https://lucky-moxie-f24aaf.netlify.app/

### Features

- **Real-time Weather Data**: Fetches current weather information using an external API.
- **Hourly and Weekly Forecast**: View forecasts for the upcoming hours and days.
- **Geolocation Support**: Automatically detects the user's location and shows weather data.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **APIs**: [OpenWeatherMap](https://openweathermap.org/api) (for weather data)

## Installation

### Prerequisites

1. A text editor (e.g., Visual Studio Code).
2. A modern web browser (e.g., Chrome, Firefox).
3. An active internet connection.

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Pratham-Taikar/weather-tracker-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd weather-tracker-app
   ```

3. **Open `index.html` in your browser:**

   Simply double-click on `index.html` to launch the application in your default browser.

4. **API Key Configuration**:

   To fetch weather data, you'll need an API key from [OpenWeatherMap](https://openweathermap.org/api).

   - Sign up for an account and get your API key.
   - Open the `app.js` file.
   - Replace `YOUR_API_KEY` with the actual key you received.

```javascript
const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
```

```NOTE : There are videos available in the videos folder, after applying them the website will work finely

```

### Forecast

- **Hourly**: Shows the weather for the next 12 hours.
- **Weekly**: Shows the weather for the next 7 days.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Here are a few ways you can help:

- Add new features (e.g., additional weather details).
- Improve the design and user interface.
- Fix bugs and issues.

Please make sure your code adheres to the project’s coding standards and includes tests where applicable.

## License

This project is open-source and available under the [MIT License](LICENSE).
