import { useState } from "react"
import axios from 'axios'
import api from '../api/api';
import getCurrentDayForecast from '../helpers/getCurrentDayForecast'

// const API_KEY = 'dX3YKxmlLozTwDpGV9SeHerdQGGstNGL';
 const FIRST_API = 'http://dataservice.accuweather.com/locations/v1/cities/search?apikey=dX3YKxmlLozTwDpGV9SeHerdQGGstNGL&q=';
 const SECOND_API1 = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/`;
 const SECOND_API2 = `?apikey=dX3YKxmlLozTwDpGV9SeHerdQGGstNGL&metric=true`;


const useForcast = () =>
{
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForcast] = useState(null);
  
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
       const currentDay =
       console.log( getCurrentDayForecast(data,data1));
         setForcast({currentDay})
        setLoading(false);
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
        isError, isLoading, forecast, submitRequest,
    };

};
export default useForcast;