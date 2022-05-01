import {API} from '../MainPage/service/index'
import {getHourAndMinute} from './getHourAndMinute'


export const getTimeCity = async (elem) => {
    try {
        if(elem) {
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${elem}&appid=${API}&units=metric`);
            const data = await api_url.json();
            
            let time = getHourAndMinute(data);
            return time
          }	
    } catch (err) {
        let errorText = "Не найден город";
        return errorText
    }
  }