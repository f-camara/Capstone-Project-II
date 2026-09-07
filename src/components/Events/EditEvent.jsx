// Importing dependencies
import { consumerContext } from "../../context/userContext";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";

function EditEvent(props) {
  // Calling the Consumer Context with numerous states
  const { user, userEvents, setUserEvents, singleEvent, setSingleEvent } =
    consumerContext();
  // Initialising react hook form with useForm and setting its mode to onChange
  const { register, watch, handleSubmit } = useForm({
    mode: "onChange",
  });
  // Storing user inputs to variables
  const [eventName, eventDate, eventTime, eventLocation] = watch([
    "eventname",
    "eventdate",
    "eventtime",
    "eventlocation",
  ]);

  // When a user submits the edit form, we:
  const onSubmit = () => {
    let updatedEvent = {
      creatorIdentification: user.userIdentification,
      eventIdentification: singleEvent.eventIdentification,
      title: eventName,
      date: eventDate,
      time: eventTime,
      location: eventLocation,
    };

    const trackerIndex = userEvents.findIndex(
      (item) => item.eventIdentification === singleEvent.eventIdentification,
    );

    const updatedEvents = userEvents.toSpliced(trackerIndex, 1, updatedEvent);

    setUserEvents(updatedEvents);

    setSingleEvent(null);

    props.onHide();
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p>
              <em>*Please Note That All Inputs Are Required</em>
            </p>
            <label>Event Name</label>
            <input
              defaultValue={singleEvent?.title}
              {...register("eventname", { required: true })}
            />
            <label>Date Of Event</label>
            <input
              defaultValue={singleEvent?.date}
              {...register("eventdate", { required: true })}
            />
            <label>Time Of Event</label>
            <input
              defaultValue={singleEvent?.time}
              {...register("eventtime", { required: true })}
            />
            <label>Event Location</label>
            <input
              defaultValue={singleEvent?.location}
              {...register("eventlocation", { required: true })}
            />
            <input type="submit" />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditEvent;
