# Weather Dashboard

## Description

The Weather Dashboard is a web application that allows users to search for weather information by city. It provides current weather conditions and a 5-day forecast. The application also maintains a search history, allowing users to quickly access previously searched cities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/weather-dashboard.git
    cd weather-dashboard
    ```

2. Install server and client dependencies:
    ```sh
    npm run install
    ```

3. Create a `.env` file in the `server` directory and add your API key:
    ```env
    API_BASE_URL=https://api.openweathermap.org/
    API_KEY=your_api_key_here
    ```

## Usage

1. Start the development server:
    ```sh
    npm run start:dev
    ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter a city name in the search bar and click "Search" to view the current weather and 5-day forecast.

## Features

- Search for current weather and 5-day forecast by city name.
- View detailed weather information including temperature, humidity, wind speed, and weather icons.
- Maintain a search history for quick access to previously searched cities.
- Responsive design for optimal viewing on various devices.

## Technologies

- **Frontend:**
  - HTML
  - CSS
  - TypeScript
  - Vite

- **Backend:**
  - Node.js
  - Express
  - TypeScript

- **APIs:**
  - OpenWeatherMap API

## Project Structure
