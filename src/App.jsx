import "./App.css";
import HomeLayout from "./layouts/HomeLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  return (
    <Router>
      <HomeLayout>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/bookmarks" Component={Bookmarks} />
        </Routes>
      </HomeLayout>
    </Router>
  );
}

export default App;
