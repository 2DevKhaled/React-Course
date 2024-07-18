import { Children, useState } from "react";
import "./index.css";
export default function App() {
  const [bill, setBill] = useState(null);
  const [percentage1, setPercentage1] = useState(null);
  const [percentage2, setPercentage2] = useState(null);
  const tip = bill * ((percentage1 + percentage2) / 2 / 100);
  function handelRest() {
    setBill("");
    setPercentage1(null);
    setPercentage2(null);
  }
  return (
    <div className="app">
      <BillInput onSetBill={setBill} bill={bill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How Did You Like The Service
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How Did Your Friends Like The Service
      </SelectPercentage>
      <Output bill={bill} tip={tip} />
      <ButtonRest onClick={handelRest}/>
    </div>
  );
}

function BillInput({ onSetBill, bill }) {
  return (
    <div>
      <label for="bill">How Much was the bill</label>
      <input
        id="bill"
        type="number"
        value={bill}
        onChange={(e) => {
          onSetBill(Number(e.target.value));
        }}
      ></input>
    </div>
  );
}
function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label for="select">{children}</label>
      <select
        value={percentage}
        onChange={(e) => {
          onSelect(Number(e.target.value));
        }}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
function Output({ bill, tip }) {
  return (
    <div>
      <h5>
        `Your Pay ${bill + tip} ( ${bill} + ${tip} )`
      </h5>
    </div>
  );
}
function ButtonRest({onClick}) {
  return <button onClick={onClick}>Rest</button>;
}