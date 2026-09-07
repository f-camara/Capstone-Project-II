// Importing dependencies
import { useForm } from "react-hook-form";
import { consumerContext } from "../../context/userContext";
import Modal from "react-bootstrap/Modal";

// Importing component styles
import styles from "./Events.module.css";
function CreateEvent(props) {
  // Calling the Consumer Context with the setUserEvents state
  const { user, setUserEvents } = consumerContext();
  // Initialising react hook form with useForm and setting its mode to onChange
  const { register, watch, handleSubmit, reset } = useForm({
    mode: "onChange",
  });
  // Storing user inputs to variables
  const [eventName, eventDate, eventTime, eventLocation] = watch([
    "eventname",
    "eventdate",
    "eventtime",
    "eventlocation",
  ]);
  // On submit function when user submits form
  const onSubmit = () => {
    // Here we create a new object called newEvent and we assign its key value pairs to the users input
    let newEvent = {
      creatorIdentification: user.userIdentification,
      eventIdentification: crypto.randomUUID(),
      title: eventName,
      date: eventDate,
      time: eventTime,
      location: eventLocation,
    };
    // Then we adjust the state of userEvents by adding the newEvent that was created to the state
    setUserEvents((prev) => [...prev, newEvent]);
    reset();
    // We close the modal by using the passed arrow function props to set the visibility to false
    props.onHide();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={styles.eventModal}
    >
      <Modal.Header closeButton className={styles.eventModalHeader}>
        <Modal.Title id="contained-modal-title-vcenter">
          Event Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.eventModalHeader}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Event Name</label>
          <input
            defaultValue=""
            {...register("eventname", { required: true })}
          />
          <label>Date Of Event</label>
          <input
            defaultValue=""
            {...register("eventdate", { required: true })}
          />
          <label>Time Of Event</label>
          <input
            defaultValue=""
            {...register("eventtime", { required: true })}
          />
          <label>Event Location</label>
          <input
            defaultValue=""
            {...register("eventlocation", { required: true })}
          />
          <p>
            <em>*Please Note That All Inputs Are Required</em>
          </p>
          <input type="submit" />
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default CreateEvent;
