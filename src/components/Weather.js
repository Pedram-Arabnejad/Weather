import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./CityComponent";
import WeatherComponent from "./WeatherComponent";

// export const WeatherIcons = {
//     "01d": "/react-weather-app/icons/sunny.svg",
//     "01n": "/react-weather-app/icons/night.svg",
//     "02d": "/react-weather-app/icons/day.svg",
//     "02n": "/react-weather-app/icons/cloudy-night.svg",
//     "03d": "/react-weather-app/icons/cloudy.svg",
//     "03n": "/react-weather-app/icons/cloudy.svg",
//     "04d": "/react-weather-app/icons/perfect-day.svg",
//     "04n": "/react-weather-app/icons/cloudy-night.svg",
//     "09d": "/react-weather-app/icons/rain.svg",
//     "09n": "/react-weather-app/icons/rain-night.svg",
//     "10d": "/react-weather-app/icons/rain.svg",
//     "10n": "/react-weather-app/icons/rain-night.svg",
//     "11d": "/react-weather-app/icons/storm.svg",
//     "11n": "/react-weather-app/icons/storm.svg",
// };

const Container = styled.div`

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 380px;
//   padding: 20px 10px;
//   margin: auto;
//   border-radius: 4px;
//   box-shadow: 0 3px 6px 0 #555;
//   background: white;
//   font-family: Montserrat;

    // display: flex;
    // flex-direction: row;
    // flex-wrap: nowrap;
    // margin-top: 10px;
    // background-color: rgba(132, 129, 129, 0.788);
    // color: #f1f1f1;
    // // width: 140px;
    // margin: 10px;
    // text-align: center;
    // line-height: 75px;
    // font-size: 30px;
`;

const AppLabel = styled.span`
//   color: black;
//   margin: 20px auto;
//   font-size: 18px;
//   font-weight: bold;
`;
const CloseButton = styled.span`
//   padding: 2px 3px;
//   background-color: black;
//   border-radius: 50%;
//   color: white;
//   position: absolute;
`;

// function Weather() {
//     const [city, updateCity] = useState();
//     const [weather, updateWeather] = useState();
//     const fetchWeather = async (e) => {
//         e.preventDefault();
//         const response = await Axios.get(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
//         );
//         updateWeather(response.data);
//     };
//     return (
//         <Container>
//             {/* <AppLabel>React Weather App</AppLabel> */}
//             {city && weather ? (
//                 <WeatherComponent weather={weather} city={city} />
//             ) : (
//                 <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
//             )}
//         </Container>
//     );
// }

// export default Weather;


function Weather() {
    const cities = ["Tehran", "Mashhad", "Isfahan","Tabriz","Ahvaz","Ramsar","Shiraz"];
    const [weathers, updateWeathers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const promises = cities.map((city) =>
                Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`)
            );
            const responses = await Promise.all(promises);
            const data = responses.map((response) => response.data);
            updateWeathers(data);
        }
        fetchData();
    }, []);

    return (
        <Container>
            {weathers.length > 0 ? (
                <div className="flex-container-down text-center">
                {/* <div style={{
                    display: "flex",
                    flexWrap: "wrap"
                }}> */}
                    {weathers.map((weather, index) => (
                        // <WeatherComponent key={index} weather={weather} city={cities[index]} />

                        <WeatherComponent key={index} weather={weather} city={cities[index]} />
                        // <WeatherComponentcity key={index} weather={weather} city={cities[index]} />
                        // <WeatherComponent key={index} weather={weather} city={cities[index]} />
                    ))}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </Container>
    );
}

export default Weather;