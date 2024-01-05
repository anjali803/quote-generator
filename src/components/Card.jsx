import Bookmark from "./icons/Bookmark";
import { addBookmark } from "../components/Bookmarks/helpers";

const Card = (props) => {
  const { content, author } = props;

  const handleAddBookmark = () => {
    const success = addBookmark({ content, author });
    if (!success) alert("Something went wrong while adding bookmark");
    else alert("Bookmark successfully added!");
  };

  if (!content || !author) return null;
  return (
    <div className="quote">
      <div className="content">{content}</div>
      <div className="author">
        <div>- {author}</div>
        {props.bookmark && (
          <button onClick={handleAddBookmark}>
            <Bookmark />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
