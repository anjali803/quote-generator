import { useEffect, useState } from "react";
import { getBookmarks } from "../Bookmarks/helpers";
import Card from "../Card";

const Bookmarks = () => {
  const [data, setData] = useState(null);
  const getData = () => {
    const res = getBookmarks();
    setData(res);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="home">
      {!data && <p>Loading!</p>}
      {data && data.length === 0 && <p>No bookmarks found!</p>}
      {data &&
        data.length > 0 &&
        data.map((quote) => {
          return <Card key={quote.content} {...quote} />;
        })}
    </div>
  );
};

export default Bookmarks;
