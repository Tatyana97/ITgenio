export const getHourAndMinute = (e) => {
    const timezone = e.timezone;
    const dates = new Date()
    const localTime = dates.getTime()
    const localOffset = dates.getTimezoneOffset() * 60000
    const utc = localTime + localOffset
    const citys = utc + (1000 * timezone)
    const times = new Date(citys)
    const hours = "0"+ times.getHours();
    const minutes = "0" + times.getMinutes();
    const time = hours.substr(-2) + ':' + minutes.substr(-2);
    return time;  
  }