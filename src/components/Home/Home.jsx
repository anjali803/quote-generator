import React, { useEffect, useState } from "react";
import { getQuote } from "../../axios/index";

const Home = () => {
  const [quotes, setQuotes] = useState([
    { content: "something", author: "auth" },
  ]);
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
    const temp = [...quotes, res];
    setQuotes(temp);
    setLoading(false);
  };

  return (
    <div>
      {quotes &&
        quotes.length > 0 &&
        quotes.map((quote) => {
          return (
            <div className="quotes" key={quote.content}>
              {quote.author} - {quote.content}
            </div>
          );
        })}
      <div>
        <button className="btn" onClick={onClick}>
          {loading ? "Loading..." : "Next Quote"}
        </button>
      </div>
    </div>
  );
};

export default Home;
