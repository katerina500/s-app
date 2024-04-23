import { useEffect, useState } from "react";

export const HeaderWidget = () => {
    const [weatherData, setWeatherData] = useState(null)
    useEffect(() => {
        fetch("/"). then((data)=>{console.log(data, "DATA IS LOADED")})
    }, [])

    return (
        <div className="header-weather-widget">
            <p className="header-weather-widget__label">Погода на сегодня в Москве</p>
            <div className="header-weather-widget__weather-data">тут будет погода</div>
        </div>
    )
}

