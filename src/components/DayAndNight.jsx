/*import React from 'react'

function DayAndNight({weather: {temp, dt, sunrise, sunset}}) {
  if (!weather) return 'from-cyan-500 to-blue-500';
  const threshold = units === 'metric' ? 20 : 60;
  const brightOrNot = ( sunrise < dt && dt < sunset ) ? true : false;
  if (weather.temp <= threshold && brightOrNot) return 'from-cyan-500 to-blue-500'
  else if (weather.temp <= threshold && !brightOrNot) return 'from-cyan-800 to-blue-800'
  else if (weather.temp > threshold && !brightOrNot) return 'from-yellow-800 to-orange-800'
  else return 'from-yellow-500 to-orange-500'
}

export default DayAndNight */