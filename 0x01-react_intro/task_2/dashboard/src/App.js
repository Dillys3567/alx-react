import logo from "./holberton-logo.jpg";
import "./App.css";
import getFooterCopy from "./utils.js/GetFooterCopy";
import getFullYear from "./utils.js/GetFullYear";

function App() {
  const footerText = getFooterCopy();
  const footerYear = getFullYear();
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="logo" className="App-logo"></img>
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email"></input>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password"></input>
        <button>Okay</button>
      </div>
      <div className="App-footer">
        <p>
          Copyright {footerYear} - {footerText}
        </p>
      </div>
    </div>
  );
}

export default App;
