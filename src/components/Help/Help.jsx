// Importing dependencies
import { faq } from "../../data/faq";
import { Container } from "react-bootstrap";

// Importing custom styles
import styles from "./Help.module.css";

function Help() {
  return (
    <Container fluid className={styles.helpContainer}>
      <h1>Help</h1>
      <br></br>
      {/* Here we map through our faq data @ '../../data/faq' */}
      {faq.map((question) => (
        <div key={question.id} className={styles.helpCard}>
          <div className={styles.helpCardHeader}>{question.question}</div>
          <div className={styles.helpCardBody}>{question.answer}</div>
        </div>
      ))}
    </Container>
  );
}

export default Help;
