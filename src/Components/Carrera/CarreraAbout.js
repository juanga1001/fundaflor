import "./CarreraAbout.css";

function CarreraAbout(props) {
  return (
    <section className="AboutCarrera">
      <div className="AboutCarrera-container">
        <img
          src="https://i.postimg.cc/tJzzCk8c/img-carrera.jpg"
          alt="Patron gráfico Flor 1 -  FundaFlor"
        ></img>
        <div className="AboutCarrera-info">
          <h1>3ra CARRERA POR LA VIDA</h1>
          <ul>
            <li><strong>Día:</strong> 8 de Octubre</li>
            <li><strong>Hora:</strong> 7:00 AM</li>
            <li><strong>Lugar:</strong> Comfama Rionegro</li>
            <li><strong>Aporte:</strong> $80.000</li>
            <li>CAMISETA // MEDALLA // AGUA</li>
          </ul>
          <a 
              href="https://checkout.wompi.co/l/eOTZak"
              target="_blank"
              rel="noreferrer">
                <button className="btn-carrera">INSCRIBIRME</button>
              </a>
        </div>
      </div>
    </section>
  );
}

export default CarreraAbout;
