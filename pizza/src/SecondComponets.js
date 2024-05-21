import "./SecondComponets.css";
export default function SecondCompoents() {
  const eleStyle = {
    backgroundColor: "blue",
    fontSize: "16px",
    fontWeight: "800",
    padding: "5px 16px",
  };
  const person = {
    name: "Khaled",
    mjor: "IT",
  };
  return (
    <div>
      <h1 className={person.name === "Khaled" ? "active" : "unactive"}>
        HI Welcome {person.name}
      </h1>
      <a style={eleStyle}>Click</a>
    </div>
  );
}
