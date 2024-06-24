import { useState } from "react";
const intialItems = [
  { id: 1, description: "Passports", quanttiy: 2, packed: false },
  { id: 2, description: "Socks", quanttiy: 12, packed: true },
];
export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>🌱 Far Away 👜</h1>;
}
function Form() {
  const [description, setDescription] = useState("");
  const [quanttiy, setQuanttiy] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quanttiy, package: false, id: Date.now() };
    setDescription("");
    setQuanttiy(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip</h3>
      <select
        value={quanttiy}
        onChange={(e) => setQuanttiy(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {intialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quanttiy} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  <footer>You Have X items on your list,and you already packed X (x%)</footer>;
}
