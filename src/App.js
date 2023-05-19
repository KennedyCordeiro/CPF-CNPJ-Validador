import logo from "./logo.svg";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import CpfCnpjField from "./Components/CpfCnpjField";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <i> CPF VALIDATOR</i>
        <img src={logo} className="App-logo" alt="logo" />
     
          <div className="input-group">
            <label for="inputCheck" className="labelCheck"></label>
            <CpfCnpjField/>
          </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
