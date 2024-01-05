const HomeLayout = (props) => {
  return (
    <div className="bg">
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/bookmarks">Bookmarks</a>
      </nav>
      <div className="bg">{props.children}</div>
    </div>
  );
};

export default HomeLayout;
