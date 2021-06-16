import React from "react";
import ArticleCompact from "./ArticleCompact";
import "./ArticleList.css";

const ArticleList = (props) => {
  return (
    <ArticleCompact
      category={props.category}
      datePublished={props.datePublished}
      title={props.title}
      excerpt={props.excerpt}
    />
  );
};

export default ArticleList;
