import logo from "./logo.svg";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import CpfCnpjField from "./Components/CpfCnpjField";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CpfCnpjField />
        <div className="App-end">
          <p> Powered by Kennedy Cordeiro</p>
        </div>
      </header>
    </div>
  );
}

export default App;
