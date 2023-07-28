import React, { useEffect } from 'react';

function Registro() {
  
  useEffect(() => {
    // Clear the data from localStorage and URL parameters
    localStorage.removeItem('id');
    const cleanedUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanedUrl);
  }, []);

  return (
    <section className="Error-carrera">
      <div className="Error-carreara-container">
      <div className="Error-carrera-info">
          <h1>REGITRO EXITOSO</h1>
          <br/>
          <p>Gracias por registrarte a la <b> 3ra Carrera por la Vida</b></p>
		  <br/>
		  <a href='/'><button className="btn-error" type="button">INICIO</button></a>
        </div>
      </div>
    </section>
  );
}

export default Registro;
