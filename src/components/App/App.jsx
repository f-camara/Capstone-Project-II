// Importing dependencies
import { Routes, Route, Navigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { consumerContext } from "../../context/userContext";

// Importing Components
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";
import Events from "../Events/Events";
import Help from "../Help/Help";
import Registration from "../Registration/Registration";
import Navigation from "../Navigation/Navigation";
import NavigationBar from "../Navigation/NavigationBar";

function App() {
  // Calling the Consumer Context with the user state
  const { user } = consumerContext();
  return (
    <Container fluid>
      <Row>
        <NavigationBar />
        {/* Conditional styling to beautify the login/register pages */}
        {user.loggedIn && (
          <Col className="p-0" xs={3} xl={2} xxl={1}>
            <Navigation />
          </Col>
        )}
        {/* Conditional styling to beautify the login/register pages */}
        <Col
          xs={user.loggedIn ? 9 : 12}
          xl={user.loggedIn ? 10 : 12}
          xxl={user.loggedIn ? 11 : 12}
        >
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Registration" element={<Registration />} />
            {/* The folloing conditions ascertain whether a user is logged in.
            If the user is not logged in but tries to access the path, they are
            redirected to the login page*/}
            <Route
              path="/"
              element={
                user.loggedIn ? <Dashboard /> : <Navigate to="/Login" replace />
              }
            />
            <Route
              path="/Dashboard"
              element={
                user.loggedIn ? <Dashboard /> : <Navigate to="/Login" replace />
              }
            />
            <Route
              path="/Events"
              element={
                user.loggedIn ? <Events /> : <Navigate to="/Login" replace />
              }
            />
            <Route
              path="/Help"
              element={
                user.loggedIn ? <Help /> : <Navigate to="/Login" replace />
              }
            />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
