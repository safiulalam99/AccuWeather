import moment from 'moment';

const  getCurrentDayForecast = (data, response) => ({
    date: moment(data.data.DailyForecasts[0].Date).format('MMMM Do'),
    IconPhrase: data.data.DailyForecasts[0].Day.IconPhrase,
    location: response,
    temperature: Math.round(data.data.DailyForecasts[0].Temperature.Minimum.Value),
    weatherIcon:data.data.DailyForecasts[0].Day.Icon ,
    
}

);


export default getCurrentDayForecast;
