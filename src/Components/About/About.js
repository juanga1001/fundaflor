import "./About.css";

function About(props) {
  return (
    <section className="About">
      <div className="About-container">
        <div className="About-info">
          <h1>¿Quiénes Somos?</h1>
          <p>
            Somos una organización privada sin ánimo de lucro, que presta apoyo
            y acompañamiento integral a personas diagnosticadas con cáncer y a
            su grupo familiar, para que mejoren su bienestar, calidad de vida
            durante el tratamiento médico y fortalezcan sus relaciones
            familiares, laborales y sociales.
          </p>
          <button onClick={() => props.handleScroll("Join")}>UNIRSE</button>
        </div>
        <img
          src="https://i.postimg.cc/5y3mqfP4/flower-pattern.png"
          alt="Patron gráfico Flor 1 -  FundaFlor"
        ></img>
        <div className="About-award">
          <img
            src="https://i.postimg.cc/cJ1tcjXx/Fundaflor-Award.png"
            alt="Fundaflor Award Rionegro"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
