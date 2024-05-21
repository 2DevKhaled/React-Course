export default function SecondCompoents() {
  const eleStyle = {
    backgroundColor: "blue",
    fontSize: "16px",
    fontWeight: "800",
    padding: "5px 16px",
  };
  return (
    <div>
      <h1
        style={{
          fontSize: "48px",
          color: "red",
        }}
      >
        HI Welcome !!
      </h1>
      <a style={eleStyle}>Click</a>
    </div>
  );
}
// Notes : there're more then one way to add style in JSX elements :
// 1- create object and add the style of elements and add the style to elements by style={name of objects} like line  2-7
// 2- add the style dierct to the elements by style={{style}} like line 10-12
