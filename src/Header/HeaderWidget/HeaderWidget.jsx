import { useEffect, useState } from "react";

export const HeaderWidget = () => {
    const [weatherData, setWeatherData] = useState(null)
    useEffect(() => {
        fetch("https://api.openweathermap.org/data/3.0/onecall?q={Moscow,Russia}&appid={58004826ae6122beb213818c59676754}"). then((data)=>{console.log(data, "DATA IS LOADED")})
    }, [])

    return (
        <div className="header-weather-widget">
            <p className="header-weather-widget__label">Погода на сегодня в Москве</p>
            <div className="header-weather-widget__weather-data">тут будет погода</div>
        </div>
    )
}

