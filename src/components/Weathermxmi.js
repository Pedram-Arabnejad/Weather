import axios, { Axios } from 'axios';
import React, { useState, useEffect } from 'react';

// const Weathermxmi = () => {
//     const cities = ["Tehran", "Mashhad", "Isfahan", "Tabriz", "Ahvaz", "Ramsar", "Shiraz"];
//     const [minTemp, setMinTemp] = useState(null);
//     const [maxTemp, setMaxTemp] = useState(null);

//     useEffect(() => {
//       async function fetchData() {
//         const promises = cities.map((city) =>
//           axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c&units=metric`)
//         );
//         const responses = await Promise.all(promises);
//         const temps = responses.map((response) => response.data.main);
//         const max = Math.max(...temps.map(temp => temp.temp_max));
//         const min = Math.min(...temps.map(temp => temp.temp_min));
//         setMinTemp(min);
//         setMaxTemp(max);
//       }
//       fetchData();
//     }, []);

//     return (
//       <div>
//         {minTemp !== null && maxTemp !== null && (
//           <div>
//             <p>Minimum temperature: {minTemp} degrees Celsius</p>
//             <p>Maximum temperature: {maxTemp} degrees Celsius</p>
//           </div>
//         )}
//       </div>
//     );
//   };

//   export default Weathermxmi;

// const Weathermxmi = () => {
//     const cities = ["Tehran", "Mashhad", "Isfahan", "Tabriz", "Ahvaz", "Ramsar", "Shiraz"];
//     const [minTemp, setMinTemp] = useState(null);
//     const [maxTemp, setMaxTemp] = useState(null);

//     useEffect(() => {
//       async function fetchData() {
//         const promises = cities.map((city) =>
//           axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c&units=metric`)
//         );
//         const responses = await Promise.all(promises);
//         const temps = responses.map((response) => response.data.main);
//         let max = null;
//         let min = null;
//         temps.forEach(temp => {
//           if (max === null || temp.temp_max > max) {
//             max = temp.temp_max;
//           }
//           if (min === null || temp.temp_min < min) {
//             min = temp.temp_min;
//           }
//         });
//         setMinTemp(min);
//         setMaxTemp(max);
//       }
//       fetchData();
//     }, []);

//     return (
//       <div>
//         {minTemp !== null && maxTemp !== null && (
//           <div>
//             <p>Minimum temperature: {minTemp} degrees Celsius</p>
//             <p>Maximum temperature: {maxTemp} degrees Celsius</p>
//           </div>
//         )}
//       </div>
//     );
//   };

//   export default Weathermxmi;


const Weathermxmi = () => {
    const cities = ["Tehran", "Mashhad", "Isfahan", "Tabriz", "Ahvaz", "Ramsar", "Shiraz"];
    const [temps, setTemps] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const promises = cities.map((city) =>
                axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c&units=metric`)
            );
            const responses = await Promise.all(promises);
            const data = responses.map((response) => ({
                city: response.data.name,
                minTemp: response.data.main.temp_min,
                maxTemp: response.data.main.temp_max,
            }));
            setTemps(data);
        }
        fetchData();
    }, []);

    return (
        <div class="flex-container text-center">
            {
                temps.map(({ city, minTemp, maxTemp }) => (
                    <div key={city}>
                        <p>
                            low: {minTemp}
                            <br />
                            high: {maxTemp}
                        </p>
                    </div>
                ))
            }
        </div >
    );
};

export default Weathermxmi;