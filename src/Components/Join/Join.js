import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import "./Join.css";
import data from "./JoinData"

function Join(props) {
  const cards = data.map((item) => {
    return (
      <Card key={item.id} className="Services-Card" sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt={item.alt}
          height="200"
          image={item.image}
        />
        <CardContent>
          <h3
            style={{ margin: "10px 20px", fontSize: "1rem", color: "#2D2D2D" }}
          >
            {item.title}
          </h3>
          <p
            style={{
              margin: "10px 20px",
              fontSize: "0.9rem",
              color: "#2D2D2D",
            }}
          >
            {item.description}
          </p>
        </CardContent>
        <CardActions>
          <p style={{ margin: "0px 30px 30px 30px", color: "#2D2D2D" }}>
            <a 
              href={item.ctaLink}
              target="_blank"
              rel="noreferrer">
                {item.cta}
            </a>
          </p>
        </CardActions>
      </Card>
    );
  });


  return (
    <section className="Join">
        <h1>SEMBREMOS ESPERANZA</h1>
      <div className="Join-container">
       {cards}
      </div>
    </section>
  );
}

export default Join;
