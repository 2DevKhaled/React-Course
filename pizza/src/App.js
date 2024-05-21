import logo from "./logo.svg";
import "./App.css";
import MyfirstCompoment from "./MyfirstCompoment";
import SecondCompoents from "./SecondComponets";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SecondCompoents />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello i'm Khaled</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyfirstCompoment />
      </header>
    </div>
  );
}

export default App;
