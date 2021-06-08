import { useState, useEffect } from "react";
import axios from "axios";

const useArticleData = () => {
  const [state, setState] = useState({ articleData: [] });

  useEffect(() => {
    axios
      .get("/articles/")
      .then((result) =>
        setState((prev) => ({ ...prev, articleData: result.data }))
      )
      .catch((err) => console.log("ERROR!", err));
  }, []);

  return {
    state,
    setState,
  };
};

export default useArticleData;
