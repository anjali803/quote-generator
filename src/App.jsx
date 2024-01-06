import "./App.css";
import HomeLayout from "./layouts/HomeLayout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <HomeLayout>
      <Outlet></Outlet>
    </HomeLayout>
  );
}

export default App;
