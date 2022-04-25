import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./Navbar.css";
import logo from "../../images/fundaflor-logo-100px.png";

function Navbar(props) {
  const [menu, setMenu] = useState(false);
  const styles = {
    borderBottomStyle: "solid",
    borderWidth: "1px",
    fontWeight: "bolder",
  };

  return (
    <div className="Navbar">
      <img src={logo} alt="Logo FundaFlor" />
      <ul>
        <li style={styles}>INICIO</li>
        <li onClick={() => props.handleScroll("About")}>NOSOTROS</li>
        <li onClick={() => props.handleScroll("Work")}>TRABAJO</li>
        <li onClick={() => props.handleScroll("Join")}>UNIRSE</li>
        <li onClick={() => props.handleScroll("Contact")}>CONTACTO</li>
        <li className="btn-navbar">
          <a 
              href="https://vaki.co/fundafloramoryvida"
              target="_blank"
              rel="noreferrer">
              <button>DONAR</button>
          </a>
        </li>
      </ul>

      <div className="mobile-menu">
        {menu && (
          <ul>
            <li style={{ fontWeight: "600" }}>INICIO</li>
            <li onClick={() => props.handleScroll("About")}>NOSOTROS</li>
            <li onClick={() => props.handleScroll("Work")}>TRABAJO</li>
            <li onClick={() => props.handleScroll("Join")}>UNIRSE</li>
            <li onClick={() => props.handleScroll("Contact")}>CONTACTO</li>
          </ul>
        )}
        <div className="mobile-menu-icon" onClick={() => setMenu(!menu)}>
          {!menu && <MenuIcon />}
          {menu && <CloseIcon />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
