import "./App.css";
import { useForm } from "./useForm";

const App = () => {
  const [values, handleChange] = useForm({email: '', password: ''});
  
  return (
    <div class="App-header">
      {/* <button
        onClick={() => {
          setCount(c => c + 1);
          setCount2(c => c + 1);
        }
          
        }
      >
        +
      </button>
      <div>count 1: {count}</div>
      <div>count 2: {count2}</div>
      <button
        onClick={() => {
          setCount(c => c - 1);
          setCount2(c => c - 1);
        }}
      >
        -
      </button> */}
      <input
        name="email"
        value={values.email}
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      ></input>
    </div>
  );
  console.log({useForm})
};

export default App;
