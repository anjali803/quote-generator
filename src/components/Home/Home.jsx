import React, { useEffect, useState } from "react";
import Card from "../Card";
import { getQuoteFn, getQuoteFnWithtag } from "./helpers";
import { getTags } from "../../axios/index";

const Home = () => {
  const [quote, setQuote] = useState({ content: "", author: "" });
  const [tags, setTags] = useState();
  const [selectedTag, setSelectedTag] = useState(null);
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    setLoading(true);
    let res = null;
    if (selectedTag && selectedTag.length > 0) {
      res = await getQuoteFnWithtag(selectedTag);
    } else {
      res = await getQuoteFn();
    }
    setQuote(res);
    setLoading(false);
  };

  const getTagsData = async () => {
    try {
      const res = await getTags();
      console.log(res);
      if (res.status === 200) setTags(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTagsData();
  }, []);

  const updateSelect = (e) => setSelectedTag(e.target.value);

  return (
    <div className="home">
      {quote && quote.content.length > 0 && <Card {...quote} bookmark />}
      <div className="btn-container">
        <select onChange={updateSelect}>
          <option value="">None</option>
          {tags &&
            tags.map((tag, index) => {
              return (
                <option key={index} value={tag.slug}>
                  {tag.name}
                </option>
              );
            })}
        </select>
        <button className="btn" onClick={onClick}>
          {loading ? "Loading..." : "Next Quote"}
        </button>
      </div>
    </div>
  );
};

export default Home;
