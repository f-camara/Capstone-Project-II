// Importing dependencies
import { consumerContext } from "../../context/userContext";

// Importing custom styles
import styles from "./Footer.module.css";

const Footer = () => {
  // Calling the Consumer Context with the user state
  const { user, setUser } = consumerContext();

  // if the logout button is clicked, we:
  const handleClick = () => {
    // [1] Set our users loggedIn value to false with setUser
    setUser({
      ...user,
      loggedIn: false,
    });
  };

  return (
    <div className={styles.footerContainer}>
      {/* This is the logout button */}
      <button className={styles.footerButton} onClick={handleClick}>
        Logout
      </button>
    </div>
  );
};

export default Footer;
