import { createContext, useState, useContext } from "react";

// Creator Context
const UserContext = createContext();

// Provider Context
export function UserProvider({ children }) {
  // Initialising the setters
  const [user, setUser] = useState({ loggedIn: false });
  const [userEvents, setUserEvents] = useState([]);
  const [singleEvent, setSingleEvent] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // Assigning setters to a variable
  const value = {
    user,
    setUser,
    userEvents,
    setUserEvents,
    singleEvent,
    setSingleEvent,
    successMessage,
    setSuccessMessage,
  };

  // Providing the context to all child components with the current values
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// Consumer Context • Function returns useContext with the value of UserContext
export function consumerContext() {
  return useContext(UserContext);
}
