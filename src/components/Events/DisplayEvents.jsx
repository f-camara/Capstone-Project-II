// Importing dependencies
import { consumerContext } from "../../context/userContext";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Importing components
import EditEvent from "./EditEvent";

// Importing component styles
import styles from "./Events.module.css";

function DisplayEvents() {
  // Calling the Consumer Context with numerous states
  const { user, userEvents, setUserEvents, singleEvent, setSingleEvent } =
    consumerContext();
  // Setting the use state for the bootstrap modal (Will be used by our handle edit function)
  const [modalShow, setModalShow] = useState(false);

  // In our handleDelete function, we
  const handleDelete = (selectedItem) => {
    if (selectedItem.creatorIdentification === user.userIdentification) {
      const updatedEventArray = userEvents.filter(
        (item) => item.eventIdentification !== selectedItem.eventIdentification,
      );
      setUserEvents(updatedEventArray);
    } else {
      alert(`You are not allowed to delete this! d >_< b`);
    }
  };

  // In our handleEdit function, we:
  const handleEdit = (selectedItem) => {
    if (selectedItem.creatorIdentification === user.userIdentification) {
      const eventToEdit = userEvents.find(
        (item) => item.eventIdentification === selectedItem.eventIdentification,
      );
      setSingleEvent(eventToEdit);
      setModalShow(true);
    } else {
      alert(`You are not allowed to edit this! d >_< b`);
    }
  };

  return (
    <Container fluid className={styles.displayEventsContainer}>
      <Row>
        {/* We map through our userEvents state and display each event in the DOM */}
        {userEvents.map((item) =>
          item.creatorIdentification === user.userIdentification ? (
            <Card
              key={item.eventIdentification}
              style={{ width: "18rem" }}
              className={styles.eventsCard}
            >
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text className={styles.eventCardDetails}>
                  {item.date} • {item.time}
                </Card.Text>
                <Card.Text>{item.location}</Card.Text>
                <Button
                  className={styles.updateEventButton}
                  onClick={() => {
                    handleEdit(item);
                  }}
                >
                  Update Event
                </Button>
                <Button
                  className={styles.deleteEventButton}
                  onClick={() => handleDelete(item)}
                >
                  Delete Event
                </Button>
              </Card.Body>
            </Card>
          ) : (
            <div key={item.eventIdentification}></div>
          ),
        )}
        {/* We pass our Edit Event functional component [bootstrap component] */}
        <EditEvent
          show={modalShow}
          onHide={() => setModalShow(false)}
          key={singleEvent?.eventIdentification}
        />
      </Row>
    </Container>
  );
}

export default DisplayEvents;
