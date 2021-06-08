import React from "react";
import useArticleData from "../hooks/useArticleData";
import ArticleCompact from "./ArticleCompact";
import "./ArticleList.css";

const ArticleList = () => {
  const { state } = useArticleData();
  return <ArticleCompact />;
};

export default ArticleList;
