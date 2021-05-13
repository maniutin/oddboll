import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <Nav />
      </Router>
      <div className="article-list">
        <ArticleList />
      </div>
    </div>
  );
}

export default App;
