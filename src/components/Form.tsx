type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (event: React.FormEvent<HTMLFormElement>) => void;
  hasCityError: boolean;
}

const Form = ({ setCity, getWeather, hasCityError }: FormPropsType) => {

  return (
    <form action="post" onSubmit={getWeather}>
      <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} />
      {hasCityError && <small className="block">cityを入力後にボタンを押して下さい。</small>}
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default Form;