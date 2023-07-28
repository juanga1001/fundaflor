import "./Error.css";

function Carrera() {
  return (
    <section className="Error-carrera">
      <div className="Error-carreara-container">
      <div className="Error-carrera-info">
          <h1>ACCESO DENEGADO</h1>
          <br/>
          <p>Si acabas de hacer el pago para la <b> 3ra Carrera por la Vida</b> por favor escreibe al siguiente correo.</p>
		  <p className="error-page-email"><b>fundafloramoryvida@gmail.com</b></p>
		  <br/>
		  <a href='/'><button className="btn-error" type="button">INICIO</button></a>
        </div>
      </div>
    </section>
  );
}

export default Carrera;
