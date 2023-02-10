import "./App.css";
import IndexOfNavbar from "./components/Navbar/Index";
import { Outlet } from "react-router-dom"; // Outlet meaning it will show all the children of this page
function App() {
  return (
    <div className="App">
      <IndexOfNavbar />
      <Outlet />
    </div>
  );
}

export default App;
