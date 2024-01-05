import React, { useState } from "react";
import Card from "../Card";
import { getQuoteFn } from "./helpers";

const Home = () => {
  const [quote, setQuote] = useState({ content: "", author: "" });
  const [loading, setLoading] = useState(false);

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
      {quote && quote.content.length > 0 && <Card {...quote} bookmark />}
      <div className="btn-container">
        <button className="btn" onClick={onClick}>
          {loading ? "Loading..." : "Next Quote"}
        </button>
      </div>
    </div>
  );
};

export default Home;
