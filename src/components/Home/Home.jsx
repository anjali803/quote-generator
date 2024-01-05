import React, { useState } from "react";
import { getQuote } from "../../axios/index";
import Bookmark from "../icons/Bookmark";

const Home = () => {
  const [quote, setQuote] = useState({content: "", author:""});
  const [loading, setLoading] = useState(false);

  const getQuoteFn = async () => {
    try {
      const res = await getQuote();
      if (res.status === 200) {
        const q = { content: res.data.content, author: res.data.author };
        return q;
      }
    } catch (err) {
      console.log(err);
    }
    return null;
  };

  const onClick = async () => {
    setLoading(true);
    const res = await getQuoteFn();
    if (res === null) {
      // checking error
      setLoading(false);
      return alert("Something went wrong!");
    }
    setQuote(res);
    setLoading(false);
  };

  return (
    <div className="home">
      {quote && quote.content.length>0 &&  (
        <div className="quote">
          <div className="content">{quote.content}</div>
          <div className="author">
            <div>-  {quote.author}</div>
            <button><Bookmark /></button>
          </div>
        </div>
      )}
      <div className="btn-container">
        <button className="btn" onClick={onClick}>
          {loading ? "Loading..." : "Next Quote"}
        </button>
      </div>
    </div>
  );
};

export default Home;
