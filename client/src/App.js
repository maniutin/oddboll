import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <Nav />
        <Route
          path="/luca-yupanqui-sounds-of-the-unborn-2021"
          component={Article}
        />
        <Route path="/about" component={About} />
      </Router>
      <div className="article-list">
        <ArticleList />
      </div>
    </div>
  );
}

export default App;
