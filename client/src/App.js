import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";
import ArticleList from "./components/ArticleList";
import Article from "./components/Article";
import About from "./components/About";
import "./App.css";

import useArticleData from "../src/hooks/useArticleData";

function App() {
  const { articleInfo } = useArticleData();
  console.log("ARTICLE INFO: ", articleInfo.articleData[0]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <Nav />
        <Route
          exact
          path="/luca-yupanqui-sounds-of-the-unborn-2021"
          component={Article}
        />
        <Route exact path="/about" component={About} />
      </Router>
      <div className="article-list">
        <ArticleList
          category={articleInfo.articleData[0].category}
          datePublished={articleInfo.articleData[0].date_published}
          title={articleInfo.articleData[0].title}
          excerpt={articleInfo.articleData[0].excerpt}
        />
      </div>
    </div>
  );
}

export default App;
