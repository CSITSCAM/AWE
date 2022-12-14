//MyWeather.js

import {React, useState} from 'react';
import axios from 'axios';

function Weather()
{
    const [loc, setLoc] = useState("");
    const [cdata, setCdata] = useState("");
    const [fdata, setFdata] = useState("");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=f72d8989b783c69dcda256d514e55de1`;
    const url1 = `https://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=f72d8989b783c69dcda256d514e55de1`;
    const update = (event) => {
        setLoc(event.target.value);
    };

    const current = (event) => {
        const promise1 = axios.get(url);
        promise1.then(function(response)
        {
            console.log(response.data);
            setCdata(response.data);
        });
        
        promise1.catch(function(response)
        {
            alert("Please enter a valid city name");
        });
    };

    const forecast=(event) => {
        const promise2 = axios.get(url1);
        promise2.then(function(response)
        {
            console.log(response.data);
            setFdata(response.data.list);
        });
        
        promise2.catch(function(response)
        {
            alert("Please enter a valid city name");
        });
    };
    
    return <>
        <input type="text" value={loc} placeholder="Enter city name" onChange={update}/>
        <button onClick={current}>Current Weather</button>
        <button onClick={forecast}>Forecasted Weather</button>
        {cdata.name ? <h1>City Name:{cdata.name}</h1>:" "}
        {cdata.main ? <>
            <h2>Current Temperature: {cdata.main.temp}</h2>
            <h2>Current Humidity: {cdata.main.humidity}</h2>
            <hr/>
        </>: ""}
        {fdata ? fdata.map((entry) => (
            <>
            <h4>Date: {entry.dt_txt}</h4>
            <h4>Temperature: {entry.main.temp}</h4>
            <h4>Humidity: {entry.main.humidity}</h4>
            <hr/>
            </>
        )):""}          
    </>;
}

export default Weather;
