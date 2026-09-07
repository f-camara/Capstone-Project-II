// Importing dependencies
import { Link } from "react-router-dom";
import { consumerContext } from "../../context/userContext";

// Importing components
import Footer from "../Footer/Footer";

// Importing component styles
import styles from "./Navigation.module.css";

function Navigation() {
  // Calling the Consumer Context with the setUserEvents state
  const { user } = consumerContext();

  return (
    <>
      <nav className={styles.sidebarNav}>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Events">Events</Link>
        <Link to="/Help">Help</Link>
        {/* Here we hide menu items if the user is logged in*/}
        {!user.loggedIn && (
          <>
            <Link to="/Login">Login</Link>
            <Link to="/Registration">Registration</Link>
          </>
        )}
        {/* Here we show the footer only if the user is logged in*/}
        {user.loggedIn ? <Footer /> : null}
      </nav>
    </>
  );
}

export default Navigation;
