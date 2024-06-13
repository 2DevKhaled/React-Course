import "./App.css";
import { useState } from "react";
const messages = ["Learn React ", "Apply for jobs", "Invest your new income"];

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date("june 21 2024");
  date.setDate(date.getDate() +count)
  return (
    <div className="dateCounter">
      <div className="steps">
        <div ckassName="buttons">
          <button onClick={() => setStep((s) => s - 1)}>
            <span>-</span>
          </button>
          <p>Step:{step}</p>
          <button onClick={() => setStep((s) => s + 1)}>
            <span>+</span>
          </button>
        </div>
      </div>
      <hr />
      <div className="counter">
        <div ckassName="buttons">
          <button onClick={() => setCount((c) => c - step)}>
            <span>-</span>
          </button>
          <p>Count:{count}</p>
          <button onClick={() => setCount((c) => c + step)}>
            <span>+</span>
          </button>
        </div>
      </div>
      <div className="date">
        <p>
          {count === 0 ? "Today is " : count>0 ?` ${count} days from today is: `: `${Math.abs(count)} days ago was`}
          {date.toDateString()}
        </p>
      </div>
    </div>
  );
}
export default App;
