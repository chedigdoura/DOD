import "./App.css";
import IndexOfNavbar from "./components/Navbar/Index";
import { Outlet } from "react-router-dom"; // Outlet meaning it will show this page components in every page

function App() {
  return (
    <div className="App">
      <IndexOfNavbar />
      <Outlet />
    </div>
  );
}

export default App;
