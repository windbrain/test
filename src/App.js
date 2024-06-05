import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "./data";

function App() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row className="row">
          <Col>
            <img src={process.env.PUBLIC_URL + "/img1.jpg"} width="100%" />
            <h4>{data[0].title}</h4>
            <p>{data[0].content}</p>
          </Col>
          <Col>
            <img src={process.env.PUBLIC_URL + "/img2.jpg"} width="100%" />
            <h4>{data[1].title}</h4>
            <p>{data[1].content}</p>
          </Col>
          <Col>
            <img src={process.env.PUBLIC_URL + "/img3.jpg"} width="100%" />
            <h4>{data[2].title}</h4>
            <p>{data[2].content}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
