import React from "react";
import ArticleCompact from "./ArticleCompact";
import "./ArticleList.css";
import useArticleData from "../hooks/useArticleData";

const ArticleList = () => {
  const { articleInfo } = useArticleData();
  console.log("ARTICLE INFO: ", articleInfo.articleData[0]);

  return (
    <ArticleCompact
      category={articleInfo.articleData[0].category}
      datePublished={articleInfo.articleData[0].date_published}
      title={articleInfo.articleData[0].title}
      excerpt={articleInfo.articleData[0].excerpt}
    />
  );
};

export default ArticleList;
