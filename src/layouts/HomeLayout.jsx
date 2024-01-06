import { Link } from "react-router-dom";

const HomeLayout = (props) => {
  return (
    <div className="bg">
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/bookmarks">Bookmarks</Link>
      </nav>
      <div className="bg">{props.children}</div>
    </div>
  );
};

export default HomeLayout;
