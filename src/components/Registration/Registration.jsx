// Importing dependencies
import { useForm } from "react-hook-form";
import { consumerContext } from "../../context/userContext";
import { Link } from "react-router";
import { Container, Row, Col } from "react-bootstrap";

// Importing component styles
import styles from "./Registration.module.css";

function Registration() {
  // Calling the Consumer Context with the setUserEvents state
  const { user, setUser, successMessage, setSuccessMessage } =
    consumerContext();
  // Initialising react hook form with useForm and setting its mode to onChange
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  // Storing user inputs to variables
  const [firstname, lastname, email, password, confirmPassword] = watch([
    "firstname",
    "lastname",
    "email",
    "password",
    "confirmPassword",
  ]);
  // Verifying if both password inputs are identical
  const passwordMatch = password === confirmPassword;
  // Once the user submits the form, we:
  const onSubmit = () => {
    // [1] Create a new object called userData and we assign its key value pairs to the users input
    const userData = {
      userIdentification: crypto.randomUUID(),
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      loggedIn: false,
    };
    // [2] ASet the state of user by adding the userData that was created to the state
    setUser(userData);
    // [3] Display a success message
    setSuccessMessage("Registration Successful!");
    // [4] reset the form
    reset();
  };

  return (
    <>
      <Container fluid className={styles.regContainer}>
        <Row className="align-items-center">
          <Col>
            {successMessage && (
              <div>
                <p>{successMessage}</p>
              </div>
            )}
            <p className={styles.accountQuery}>
              Have an account? Login <Link to="/Login">Here</Link>
            </p>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name</label>
                <input
                  id="firstname"
                  {...register("firstname", {
                    required: true,
                    maxLength: {
                      value: 15,
                      message: "Name must be 15 characters or less",
                    },
                  })}
                />
                <p>{errors.firstname?.message}</p>

                <label>Surname</label>
                <input
                  id="lastname"
                  {...register("lastname", {
                    required: true,
                    maxLength: {
                      value: 20,
                      message: "Lastname must be 20 characters or less",
                    },
                  })}
                />
                <p>{errors.surname?.message}</p>

                <label>Email</label>
                <input
                  id="email"
                  {...register("email", {
                    required: true,
                    /* REF: Geek for Geeks - Validate Email Address using RegExp in JavaScript: https://www.geeksforgeeks.org/javascript/how-to-validate-email-address-using-regexp-in-javascript/ */
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email address",
                    },
                  })}
                />
                <p>{errors.email?.message}</p>

                <label>Password</label>
                <input
                  id="password"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                    pattern: {
                      /* REF: Geek for geeks - JavaScript - Validate Password in JS: https://www.geeksforgeeks.org/javascript/javascript-program-to-validate-password-using-regular-expressions/ */
                      value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
                      message:
                        "Password must contain at least one uppercase, one lowercase, and one number",
                    },
                  })}
                />
                <p>{errors.password?.message}</p>

                <label>Confirm Password</label>
                <input
                  {...register("confirmPassword", {
                    required: true,
                  })}
                />
                {/* If passwords do not match, we display the error message */}
                {!passwordMatch && <p>Passwords do not match</p>}

                <button className={styles.regButton} type="submit">
                  Register
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Registration;
