import "./App.css";
import HomeLayout from "./layouts/HomeLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  return (
    <HomeLayout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </HomeLayout>
  );
}

export default App;