import "./Footer.css";
import logo from "../../images/fundaflor-logo-100px.png";

function Footer(props) {

  return (
    <div className="Footer">
        <div className="Footer-container">
            <img src={logo} alt="Logo FundaFlor" />
            <ul>
                <li onClick={() => props.handleScroll("App")}>INICIO</li>
                <li onClick={() => props.handleScroll("About")}>NOSOTROS</li>
                <li onClick={() => props.handleScroll("Work")}>TRABAJO</li>
                <li onClick={() => props.handleScroll("Join")}>UNIRSE</li>
                <li onClick={() => props.handleScroll("Contact")}>CONTACTO</li>
                <li className="btn-navbar">
                  <a 
                  href="https://checkout.wompi.co/l/99L316"
                  target="_blank"
                  rel="noreferrer">
                    <button>DONAR</button>
                  </a>
                </li>
            </ul>

        </div>
      <div className="Footer-copyright">
          <p>Copyright © 2022 FundaFlor Amor & Vida. All rights reserved | Developed by   
            <a href="https://j10agency.web.app/" target="_blank" rel="noreferrer">
              <img src="https://i.postimg.cc/sgzykcgR/J10-Logo-01.png" alt="j10 agency logo"/>
            </a>
          </p>
      </div>
    </div>
  );
}

export default Footer;
