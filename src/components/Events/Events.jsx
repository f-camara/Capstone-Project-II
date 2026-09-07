// Importing dependencies
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

// Importing components
import DisplayEvents from "./DisplayEvents";
import CreateEvent from "./CreateEvent";

// Importing component styles
import styles from "./Events.module.css";

function Events() {
  // Bootstrap component requires useState
  const [modalShow, setModalShow] = useState(false);
  return (
    <Container fluid className={styles.eventsContainer}>
      {/* When this button is clicked it will set the modal state to true [Bootstrap Component] */}
      <Button
        onClick={() => setModalShow(true)}
        className={styles.createEventButton}
      >
        Create A New Event
      </Button>
      {/* CreateEvent is calles with props (This is the modal) [Bootstrap Component]*/}
      <CreateEvent show={modalShow} onHide={() => setModalShow(false)} />
      {/* Will display events when created */}
      <DisplayEvents />
    </Container>
  );
}

export default Events;
