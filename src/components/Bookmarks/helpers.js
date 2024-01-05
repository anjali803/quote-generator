export const addBookmark = (quote) => {
  const success = (quote) => {
    localStorage.setItem("bookmarks", JSON.stringify(quote));
    return true;
  };

  const { content, author } = quote;
  if (!content || !author) return false;
  const lsQuotes = localStorage.getItem("bookmarks");
  try {
    if (!lsQuotes) return success([{ content, author }]);
    else {
      const qts = JSON.parse(lsQuotes);
      let temp = [{ content, author }, ...qts];
      return success(temp);
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const getBookmarks = () => {
  try {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    return bookmarks;
  } catch (err) {
    console.log(err);
    return null;
  }
};
