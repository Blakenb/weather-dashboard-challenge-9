import dotenv from "dotenv";
dotenv.config();

interface Coordinates {
  lon: number;
  lat: number;
}

export interface FiveDayForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

export interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number;
  sys: Sys;
  dt_txt: string;
}

export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Sys {
  pod: string;
}

export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Coord {
  lat: number;
  lon: number;
}

// TODO: Define a class for the Weather object
// class Weather {
//   constructor() {}
// }

class WeatherService {
  baseURL: string;
  API_KEY: string;

  private weatherEndpoint: string;
  private fiveDayForecastEndpoint: string;
  constructor() {
    if (!process.env.API_BASE_URL) {
      throw new Error(`API_BASE_URL not valid: ${process.env.API_BASE_URL}`);
    }
    this.baseURL = process.env.API_BASE_URL;
    if (!process.env.API_KEY) {
      throw new Error(`API_KEY not valid: ${process.env.API_KEY}`);
    }
    this.API_KEY = process.env.API_KEY;

    this.weatherEndpoint = `${process.env.API_BASE_URL}/data/2.5/weather?appid=${process.env.API_KEY}&units=imperial`;
    this.fiveDayForecastEndpoint = `${process.env.API_BASE_URL}/data/2.5/forecast?appid=${process.env.API_KEY}&units=imperial`;
  }

  private async fetchLocationData(query: string) {
    const cityResponse = await fetch(query);
    console.log(await cityResponse.json());
    if (!cityResponse.ok) {
      throw new Error(`Response status: ${cityResponse.status}`);
    }
    return await cityResponse.json();
  }

  private destructureLocationData(locationData: any): Coordinates {
    const coordinates: Coordinates = {
      lat: locationData.lat,
      lon: locationData.lon,
    };
    return coordinates;
  }

  private buildGeocodeQuery(cityName: string): string {
    return `${this.weatherEndpoint}&q=${cityName}`;
  }

  private buildWeatherQuery(coordinates: Coordinates): string {
    return `${this.fiveDayForecastEndpoint}&lat=${coordinates.lat}&lon=${coordinates.lon}`;
  }

  private async fetchAndDestructureLocationData(cityName: string) {
    const query = this.buildGeocodeQuery(cityName);
    const data = this.fetchLocationData(query);
    return data;
  }

  private async fetchWeatherData(coordinates: Coordinates) {
    const endPoint = this.buildWeatherQuery(coordinates);
    return await fetch(endPoint);
  }

  private async parseCurrentWeather(
    response: any
  ): Promise<FiveDayForecastResponse> {
    const data = (await response.json()) as FiveDayForecastResponse;
    const list = data.list.filter((day: List) =>
      day.dt_txt.includes("06:00:00")
    );
    data.list = list;
    return data;
  }
  // // TODO: Complete buildForecastArray method
  // private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {
    const cityData = await this.fetchAndDestructureLocationData(city);
    const coordinates = this.destructureLocationData(cityData.coord);
    const data = await this.fetchWeatherData(coordinates);
    const fiveDayForecastData = await this.parseCurrentWeather(data);
    console.log(fiveDayForecastData);
  }
}

export default new WeatherService();
