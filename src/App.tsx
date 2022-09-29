import { useState } from 'react';

import Title from './components/Title';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';

type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
}

function App() {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  });
  const [hasCityError, setHasCityError] = useState<boolean>(false);

  const baseUrl = process.env.REACT_APP_WEATHER_API_URL;
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const getWeather = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (city.trim() === "") {
      setHasCityError(true);
      setResults({
        country: "",
        cityName: "",
        temperature: "",
        conditionText: "",
        icon: "",
      });
      return;
    };
    setHasCityError(false);
    
    const url = `${baseUrl}v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setResults({
        country: data.location.country,
        cityName: data.location.name,
        temperature: data.current.temp_c,
        conditionText: data.current.condition.text,
        icon: data.current.condition.icon,
      })
    });
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form 
          setCity={setCity}
          getWeather={getWeather}
          hasCityError={hasCityError}
        />
        <Results results={results}/>
      </div>
    </div>
  );
}

export default App;
