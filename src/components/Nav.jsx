import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function MyNavBar() {
  return (
    <Navbar>
      <Container>
        <Nav.Link href="#top" activeClass="active" smooth spy to="top">Top</Nav.Link>
        <Nav.Link href="#about" activeClass="active" smooth spy to="about">About</Nav.Link>
        <Nav.Link href="#projects" activeClass="active" smooth spy to="projects">Projects</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Container>
    </Navbar>
  );
}
