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
              src="images/kotra-and-zavoloka-silence-2020-cover.jpeg"
              alt="album cover"
            />
          </Link>
        </div>
        <div className="article-category">Review</div>
        <div className="publication-date">May 5, 2021</div>
        <div className="article-title">
          <Link to="/kotra-and-zavoloka-silence-2020">
            Kotra &amp; Zavoloka, “Silence” (2020)
          </Link>
        </div>
        <div className="article-excerpt">
          <p>This is the best article ever, wow!</p>
        </div>
        <div className="article-read-more">
          <Link to="/kotra-and-zavoloka-silence-2020">Read More</Link>
        </div>
      </Router>
    </div>
  );
};

export default ArticleCompact;
