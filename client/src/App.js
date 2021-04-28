import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <Nav />
      </Router>
    </div>
  );
}

export default App;
