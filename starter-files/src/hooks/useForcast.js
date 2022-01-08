import { useState } from "react"
import axios from 'axios'
import api from '../api/api';
import getCurrentDayForecast from '../helpers/getCurrentDayForecast'

// const API_KEY = '56mFA4VJG50cfGrVF9JHa8Rx5xNQ2kFB';
 const FIRST_API = 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=56mFA4VJG50cfGrVF9JHa8Rx5xNQ2kFB&q=';
 const SECOND_API1 = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/`;
 const SECOND_API2 = `?apikey=56mFA4VJG50cfGrVF9JHa8Rx5xNQ2kFB&metric=true`;
const geoAPI = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=56mFA4VJG50cfGrVF9JHa8Rx5xNQ2kFB&q=61.5088128%2C%2023.8092288`;
 
export const WeatherIcons = {

};

const getIcon = ()=> {}


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
       // console.log(currentDay);
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
     // console.log(response[0].Key);
       card(data,response[0].EnglishName)
     
        } 
  
    return {
        isError, isLoading, forecast, icon, submitRequest,
    };


};
export default useForcast;