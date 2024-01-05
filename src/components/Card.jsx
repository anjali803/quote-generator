import Bookmark from "./icons/Bookmark";

const Card = (props) => {
  const { content, author } = props;

  const handleAddBookmark = () => {};

  if (!content || !author) return null;
  return (
    <div className="quote">
      <div className="content">{content}</div>
      <div className="author">
        <div>- {author}</div>
        <button onClick={handleAddBookmark}>
          <Bookmark />
        </button>
      </div>
    </div>
  );
};

export default Card;
