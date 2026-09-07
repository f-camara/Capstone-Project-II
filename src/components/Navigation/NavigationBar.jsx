// Importing dependencies
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Importing component styles
import styles from "./Navigation.module.css";

function NavigationBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className={styles.topNav}>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Nav className="me-auto">{/* Add Custom Links Here */}</Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
