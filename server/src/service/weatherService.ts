import dotenv from "dotenv";
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lon: number;
  lat: number;
}

// TODO: Define a class for the Weather object

// TODO: Complete the WeatherService class
class WeatherService {
  baseURL: string;
  API_KEY: string;
  cityName: string;
  private weatherEndpoint: string;
  constructor(cityName: string) {
    if (!process.env.API_BASE_URL) {
      throw new Error(`API_BASE_URL not valid: ${process.env.API_BASE_URL}`);
    }
    this.baseURL = process.env.API_BASE_URL;
    if (!process.env.API_KEY) {
      throw new Error(`API_KEY not valid: ${process.env.API_KEY}`);
    }
    this.API_KEY = process.env.API_KEY;
    this.cityName = cityName;
    this.weatherEndpoint = `${process.env.API_BASE_URL}/data/2.5/weather?appid=${process.env.API_KEY}&units=imperial`;
  }

  // TODO: Create fetchLocationData method

  private async fetchLocationData(query: string) {
    const cityResponse = await fetch(query);
    if (!cityResponse.ok) {
      throw new Error(`Response status: ${cityResponse.status}`);
    }
    return await cityResponse.json();
  }
  // TODO: Create destructureLocationData method
  // private destructureLocationData(locationData: any): Coordinates {

  // }
  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {
    const encodedQuery = encodeURIComponent(this.cityName);
    return `${this.weatherEndpoint}&q=${encodedQuery}`;
  }
  // TODO: Create buildWeatherQuery method
  // private buildWeatherQuery(coordinates: Coordinates): string {}
  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {
    const query = this.buildGeocodeQuery();
    const data = this.fetchLocationData(query);
  }
  // TODO: Create fetchWeatherData method
  // private async fetchWeatherData(coordinates: Coordinates) {}
  // // TODO: Build parseCurrentWeather method
  // private parseCurrentWeather(response: any) {}
  // // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {
    const cityData = this.fetchLocationData(city);
  }
}

export default new WeatherService();
