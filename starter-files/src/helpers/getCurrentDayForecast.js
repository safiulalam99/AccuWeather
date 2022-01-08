import moment from 'moment';

const  getCurrentDayForecast = (data, response) => ({
   // weekday: moment(data.DailyForecasts.Date).format('dddd'),
    //date: moment(data.DailyForecasts.UnitType).format('MMMM Do'),
    location: response,
    temperature: Math.round(data.data.DailyForecasts[0].Temperature.Minimum.Value)
    //weatherIcon: `'https://www.metaweather.com/static/img/weather/${data.weather_state_abbr}.svg`,
    //weatherDescription: data.weather_state_name,
    
}

);


export default getCurrentDayForecast;
