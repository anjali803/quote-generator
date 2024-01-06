import { Link } from "react-router-dom";

const HomeLayout = (props) => {
  return (
    <div className="bg">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/bookmarks">Bookmarks</Link>
      </nav>
      <div className="bg">{props.children}</div>
    </div>
  );
};

export default HomeLayout;
