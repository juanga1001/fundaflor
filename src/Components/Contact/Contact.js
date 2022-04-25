import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import "./Contact.css";
import Form from "./Form"

function Contact() {
  return (
    <section className="Contact">
      <div className="Contact-container">
      <div className="Contact-info">
          <h1>Contáctanos.</h1>
          <h3>+57 (300) 257 2230</h3>
          <p>Si necesitas ayuda o hay algo que quieras decirnos no dudes en contactárnos, estaremos felices de recibir tu mensaje.</p>
          <div className='Contact-rrss'>
            
            <a
            href="https://www.facebook.com/fundaflor21/"
            target="_blank"
            rel="noreferrer"> 
                <FacebookIcon className="Contact-rrss-icon"/> 
            </a>
            <a
            href="https://www.instagram.com/fundaflor21/"
            target="_blank"
            rel="noreferrer"> 
                <InstagramIcon className="Contact-rrss-icon"/> 
            </a>
            <a
            href="https://wa.me/573002572230?text=¡Hola, visité la página web de FundaFlor y me gustaría participar!"
            target="_blank"
            rel="noreferrer"> 
                <WhatsAppIcon className="Contact-rrss-icon"/> 
            </a>
            <a
            href="https://www.instagram.com/florecer_21_/"
            target="_blank"
            rel="noreferrer"> 
                <ShoppingCartIcon className="Contact-rrss-icon"/> 
            </a>
          

          </div>
        </div>
        <div className="Contact-form">
          <Form/>
        </div>
      </div>
      <div className="custom-shape-divider-top-1650541578">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
    </div>
    </section>
  );
}

export default Contact;
