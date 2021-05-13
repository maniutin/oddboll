import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./ArticleCompact.css";

const ArticleCompact = () => {
  return (
    <div className="article-compact">
      <Router>
        <div className="album-cover">
          <Link to="/kotra-and-zavoloka-silence-2020">
            <img
              src="images/luca-yupanqui-sounds-of-the-unborn-2021-cover.jpeg"
              alt="album cover"
            />
          </Link>
        </div>
        <div className="article-compact-text">
          <div className="article-compact-metadata">
            <div className="article-category">Review</div>
            <div className="publication-date">April 30, 2021</div>
          </div>
          <div className="article-title">
            <Link to="/luca-yupanqui-sounds-of-the-unborn-2021">
              Luca Yupanqui, “Sounds Of The Unborn” (2021)
            </Link>
          </div>
          <div className="article-excerpt">
            <p className="excerpt">
              Probably the first album by a yet unborn artist
            </p>
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
