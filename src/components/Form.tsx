type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form = (props: FormPropsType) => {

  return (
    <form action="post" onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)} />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default Form;