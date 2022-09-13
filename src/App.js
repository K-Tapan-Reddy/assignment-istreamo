import "./App.scss";
import "./styles/variables.scss";
import SideMenu from "./components/sidemenu/SideMenu";
import { StatContainer } from "./containers/stat-container/StatContainer";
import { TableContainer } from "./containers/table-container/TableContainer";
import { useState } from "react";
import { MenuItem } from "./components/sidemenu/MenuItem";

function App() {
  const [show, setShow] = useState(false);
  const showSideMenuHandler = () => {
    setShow(!show);
  };
  return (
    <div className="app">
      <MenuItem
        icon="GiHamburgerMenu"
        onClick={showSideMenuHandler}
        className="Menuicon"
      />
      <section className={`side-menu-content ${show ? "show" : "hide"}`}>
        <SideMenu show={showSideMenuHandler} />
      </section>
      <div className="main-content">
        <StatContainer />
        <TableContainer />
      </div>
    </div>
  );
}

export default App;
