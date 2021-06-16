import { useState, useEffect } from "react";
import axios from "axios";

const useArticleData = () => {
  const [articleInfo, setArticleInfo] = useState({ articleData: [] });

  useEffect(() => {
    axios
      .get("http://localhost:3001/articles")
      .then((result) =>
        setArticleInfo((prev) => ({ ...prev, articleData: result.data }))
      )
      .catch((err) => console.log("ERROR!", err));
  }, [articleInfo.articleData.lenght]);

  return {
    articleInfo,
    setArticleInfo,
  };
};

export default useArticleData;
