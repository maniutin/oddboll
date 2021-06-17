import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./ArticleCompact.css";

import useArticleData from "../hooks/useArticleData";

const ArticleCompact = () => {
  const { articleInfo } = useArticleData();
  console.log("ARTICLE INFO: ", articleInfo.articleData[0]);

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
        {articleInfo.articleData.map((article) => (
          <div className="article-compact-text">
            <div className="article-compact-metadata">
              <div className="article-category">
                {article && article.category}
              </div>

              <div className="article-date-published">
                {article && article.to_char}
              </div>
            </div>

            <div className="article-title">
              <Link to="/luca-yupanqui-sounds-of-the-unborn-2021">
                {article && article.title}
              </Link>
            </div>

            <div className="article-excerpt">
              <p className="excerpt">{article && article.excerpt}</p>
            </div>

            <div className="article-read-more">
              <Link to="/luca-yupanqui-sounds-of-the-unborn-2021">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </Router>
    </div>
  );
};

export default ArticleCompact;
