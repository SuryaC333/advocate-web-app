import "./App.css";
import NavMenu from "./components/SideNav/NavMenu";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavigationRouting from "./components/Routing/NavigationRouting";
import Footer from "./components/Footer/Footer";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <NavMenu />
      <div>
        <NavigationRouting />
        <Footer />
      </div>
    </div>
  );
}

export default App;
