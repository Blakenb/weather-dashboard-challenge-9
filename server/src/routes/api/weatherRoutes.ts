import { Router, type Request, type Response } from "express";
import dotenv from "dotenv";
import WeatherService from "../../service/weatherService.js";
const router = Router();
dotenv.config();

// // Assuming HistoryService is already implemented and imported
// import HistoryService from "../../service/historyService.js";

// const weatherEndpoint = `${process.env.API_BASE_URL}/data/2.5/weather?appid=${process.env.API_KEY}&units=imperial`;
// const fiveDayForecastEndpoint = `${process.env.API_BASE_URL}/data/2.5/forecast?appid=${process.env.API_KEY}&units=imperial`;

router.post("/", async (req: Request, _: Response) => {
  const cityName = encodeURIComponent(req.body.cityName);
  const result = await WeatherService.getWeatherForCity(cityName);
  console.log(result);
  // const cityEndpoint = `${weatherEndpoint}&q=${cityName}`;
  // console.log(cityEndpoint);
  // const cityResponse = await fetch(cityEndpoint);
  // if (!cityResponse.ok) {
  //   throw new Error(`Response status: ${cityResponse.status}`);
  // }
  // const cityData = await cityResponse.json();

  // const coords = cityData.coord;
  // const fiveDayendPoint = `${fiveDayForecastEndpoint}&lat=${coords.lat}&lon=${coords.lon}`;
  // const response = await fetch(fiveDayendPoint);
  // if (!cityResponse.ok) {
  //   throw new Error(`Response status: ${response.status}`);
  // }
  // const data = await response.json();
  // const mappedData = data.list.map((x: any) => {
  //   return {
  //     city: data.city.name,
  //     date: x.dt_txt,
  //     icon: x.weather[0].icon,
  //     iconDescription: x.weather[0].description,
  //     tempF: x.main.temp,
  //     windSpeed: x.wind.speed,
  //     humidity: x.main.humidity,
  //   };
  // });
  // console.log(mappedData);
  // res.setHeader("Content-Type", "application/json");
  // res.end(JSON.stringify(mappedData));
});

//GET search history
// router.get("/history", async (req: Request, res: Response) => {
//   // try {
//   //   const history = await HistoryService.getSearchHistory();
//   //   res.setHeader("Content-Type", "application/json");
//   //   res.end(JSON.stringify(history));
//   // } catch (error) {
//   //   res.status(500).send({ error: "Failed to fetch search history" });
//   // }
// });

// // DELETE city from search history
// router.delete("/history/:id", async (req: Request, res: Response) => {
//   // Implementation for deleting a city from search history
// });

export default router;
