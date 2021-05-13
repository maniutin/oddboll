import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import "./ArticleCompact.css";

const ArticleCompact = () => {
  return (
    <div className="album-cover">
      <img
        src="images/kotra-and-zavoloka-silence-2020-cover.jpeg"
        alt="album cover"
      />
    </div>
  );
};

export default ArticleCompact;
