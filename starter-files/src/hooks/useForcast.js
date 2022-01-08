import { useState } from "react"
import axios from 'axios'
import api from '../api/api';
import getCurrentDayForecast from '../helpers/getCurrentDayForecast'

// const API_KEY = '7ImADGVxPOKBMlf1aLfNpJxxWYvxlX1U';
 const FIRST_API = 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=7ImADGVxPOKBMlf1aLfNpJxxWYvxlX1U&q=';
 const SECOND_API1 = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/`;
 const SECOND_API2 = `?apikey=7ImADGVxPOKBMlf1aLfNpJxxWYvxlX1U&metric=true`;

 
export const WeatherIcons = {
  "22":'/components/Icons/white-flower-beautiful-hd-pic-japantown-215486907.jpg',
  "2": "/react-weather-app/icons/night.svg",
  "3": "/react-weather-app/icons/day.svg",
  "4": "/react-weather-app/icons/cloudy-night.svg",
  "5": "/react-weather-app/icons/cloudy.svg",
  "6": "/react-weather-app/icons/cloudy.svg",
  "7": "/react-weather-app/icons/perfect-day.svg",
  "8": "/react-weather-app/icons/cloudy-night.svg",
  "9": "/react-weather-app/icons/rain.svg",
  "10": "/react-weather-app/icons/rain-night.svg",
  "11": "/react-weather-app/icons/rain.svg",
  "12": "/react-weather-app/icons/rain-night.svg",
  "13": "/react-weather-app/icons/storm.svg",
  "14": "/react-weather-app/icons/storm.svg",
};

const getIcon = ()=> {}
// let x= Math.floor(Date.now('hh:mm:ss') / 1000);
// if (x>=30000){
//   if (x<=567565){
//       return day
//   }
// }
// else 
// {weatherIcon:data.data.DailyForecasts[0].Night.Icon},


const useForcast = () =>
{
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForcast] = useState(null);
    const [icon, setIcon] = useState('');

    const getLocationKey= async (location)=>
  {
      const {data}=  await axios(`${FIRST_API}`+location); 
    
    if(!data || data.length === 0)
    {
      setError("No location found");
      setLoading(false);
      return;
    }
      return data
  }
  
  const forecastData= async (Key)=> 
    {
      const data1 =  await axios(SECOND_API1+ Key+SECOND_API2);
      if(!data1 || data1.length === 0)
      {
          setError("Something is wrong");
          setLoading(false)
          return;
      }
      
      return data1; 
    }

  const card = (data,data1) => {
       const currentDay = getCurrentDayForecast(data,data1);
         setForcast({currentDay})
        setLoading(false);
        setIcon(getCurrentDayForecast(data,data1).weatherIcon)
        console.log(currentDay);
      }
    const submitRequest = async location =>
    {
        setLoading(true)
        setError(false)  
        const response = await getLocationKey(location);
       if(!response || response[0].Key === 0)return;
        const data = await forecastData(response[0].Key)
        if(!data)return;
       // console.log(data.data.DailyForecasts);
      // console.log(response);
       card(data,response[0].EnglishName)
     
        } 
  
    return {
        isError, isLoading, forecast, icon, submitRequest,
    };


};
export default useForcast;