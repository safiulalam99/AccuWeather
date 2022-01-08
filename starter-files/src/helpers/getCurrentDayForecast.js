import moment from 'moment';

const  getCurrentDayForecast = (data, response) => ({
   // weekday: moment(data.DailyForecasts.Date).format('dddd'),
    date: Math.floor(Date.now('hh:mm:ss') / 1000),
   
    location: response,
    temperature: Math.round(data.data.DailyForecasts[0].Temperature.Minimum.Value),
    weatherIcon:data.data.DailyForecasts[0].Day.Icon ,
    //weatherDescription: data.weather_state_name,
    
}

);


export default getCurrentDayForecast;
