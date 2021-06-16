import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./ArticleCompact.css";

import Article from "./Article";

const ArticleCompact = (props) => {
  return (
    <div className="article-compact">
      <Router>
        <div className="album-cover">
          <Link to="/luca-yupanqui-sounds-of-the-unborn-2021">
            <img
              src="images/luca-yupanqui-sounds-of-the-unborn-2021-cover.jpeg"
              alt="album cover"
            />
          </Link>
        </div>

        <div className="article-compact-text">
          <div className="article-compact-metadata">
            <div className="article-category">{props.category}</div>
            <div className="publication-date">{props.datePublished}</div>
          </div>

          <div className="article-title">
            <Link to="/luca-yupanqui-sounds-of-the-unborn-2021">
              {props.title}
            </Link>
          </div>

          <div className="article-excerpt">
            <p className="excerpt">{props.excerpt}</p>
          </div>

          <div className="article-read-more">
            <Link to="/luca-yupanqui-sounds-of-the-unborn-2021">Read More</Link>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default ArticleCompact;
