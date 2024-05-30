import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function ContainerOutsideExample() {
  return (
    <Navbar bg="dark" variant="dark" className="barra">
      <Container className="contNav" id="contenedor">
        <Link to="/Home" className="link">
          &#127968; Home
        </Link>
        <Link to="/Contacto" className="link">
          &#128210; Contacto
        </Link>
        <div className="cake">
          <p>Happy Cake &#127856;</p>
        </div>
      </Container>
    </Navbar>
  );
}

export default ContainerOutsideExample;
