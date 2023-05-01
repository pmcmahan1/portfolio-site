import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function MyNavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>Patrick McMahan</Navbar.Brand>
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Container>
    </Navbar>
  );
}
