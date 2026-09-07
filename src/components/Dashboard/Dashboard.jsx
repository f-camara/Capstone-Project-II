// Importing dependencies
import { consumerContext } from "../../context/userContext";
import { Container } from "react-bootstrap";

// Importing custom styles
import styles from "./Dashboard.module.css";

function Dashboard() {
  // Calling the Consumer Context with the user state
  const { user } = consumerContext();

  return (
    <Container fluid className={styles.dashboardContainer}>
      <section>
        {/* The dasboard displays a greeting message with some
          information. I built it this way so that, in future, if i feel like it i can
          use the dashboard to maybe build widgets for individual components.*/}
        <h2> Hello {user.firstname}</h2>
        <p>
          Head over to the events page to view, edit and update your up and
          coming events
        </p>
      </section>
    </Container>
  );
}

export default Dashboard;
