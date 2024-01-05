const HomeLayout = (props) => {
  return (
    <div className="bg">
      <nav className="nav">
        <a href="">Home</a>
        <a href="bookmarks">Bookmarks</a>
      </nav>
      {props.children}
    </div>
  );
};

export default HomeLayout;
