import { useEffect, useState } from "react";
import urlParse from 'url-parse';
import "./Carrera.css";
import Form from "./FormCarrera"

function Carrera() {
	const [id, setId] = useState(null);

  useEffect(() => {
    // Retrieve the id from localStorage if it exists
    const storedId = localStorage.getItem('id');
    if (storedId) {
      setId(storedId);
    } else {
      // Store the original URL
      const originalUrl = window.location.href;

      // Extract and save the query parameters
      const parsedUrl = urlParse(originalUrl);
      const queryParams = {};
      const searchParams = new URLSearchParams(parsedUrl.query);
      searchParams.forEach((value, key) => {
        queryParams[key] = value;
      });


      // Check if the id parameter is present
      if (queryParams.id) {
        // Set the id state with the extracted id value
        const extractedId = queryParams.id;
        setId(extractedId);
        
        // Store the id in localStorage for persistence
        localStorage.setItem('id', extractedId);
      } else {
		// Redirect to the error page if id is not present
        window.location.href = '/error';
	  }
    }
  }, []);

  useEffect(() => {
    // Remove URL parameters after the first render
    const cleanedUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanedUrl);
  }, [id]);

  return (
    <section className="Contact-carrera">
      <div className="Contact-carreara-container">
      <div className="Contact-carrera-info">
          <h1>INSCRIPCIÓN</h1>
          <h3>3ra Carrera por la Vida 2023</h3>
          <p>Gracias por inscribirte y tomar la decisión de contribuir a nuestra fundación.  Por favor llenar los siguientes campos solo si ya realizaste el pago de inscripción.</p>
		  <p className='form-note'>Estos datos serán utilizados exclusivamente para términos de la 3ra carrera por la vida, al diligenciarlo apruebas el uso de ellos. </p>
        </div>
        <div className="Contact-carrera-form">
			{id ? <Form transaction={String(id)}/> : null}
        </div>
      </div>
    </section>
  );
}

export default Carrera;
