import { useState } from 'react';

const Form = () => {
  const [city, setCity] = useState<string>("");
  const baseUrl = process.env.REACT_APP_WEATHER_API_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const getWeather = (event: any) => {
    event.preventDefault();
    console.log(baseUrl);
    
    const url = `${baseUrl}v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
  }

  return (
    <form action="">
      <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} />
      <button type="submit" onClick={getWeather}>Get Weather</button>
    </form>
  );
}

export default Form;