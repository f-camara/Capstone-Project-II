// Importing dependencies
import { useForm } from "react-hook-form";
import { consumerContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router";
import { Container } from "react-bootstrap";

// Importing custom styles
import styles from "./Login.module.css";

function Login() {
  // Calling the Consumer Context with the user state
  const { user, setUser } = consumerContext();
  // Initialising react hook form with useForm and setting its mode to onChange
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  // Storing user inputs to variables
  const [email, password] = watch(["email", "password"]);

  // Storing useNavigate to a variable so that it works in our onSubmit function
  const navigate = useNavigate();

  // When the user submits the form, we:
  const onSubmit = () => {
    // [1] check if the input entered is equal to what we have stored in our state, if it is, we:
    if (user.email === email && user.password === password) {
      // [1] Set our logged in state to true
      setUser({
        ...user,
        loggedIn: true,
      });
    }
    // Navigate to dashboard after loging in
    navigate("/");
  };

  return (
    <>
      <Container fluid className={styles.loginContainer}>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className={styles.accountCreate}>
              Not a user? create an account <Link to="/Registration">Here</Link>
            </p>
            <label>Email</label>
            <input
              {...register("email", {
                required: true,
                /* REF: Geek for Geeks - Validate Email Address using RegExp in JavaScript: https://www.geeksforgeeks.org/javascript/how-to-validate-email-address-using-regexp-in-javascript/ */
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                },
                message: "Please enter a valid email address",
              })}
            />
            <p>{errors.email?.message}</p>

            <label>Password</label>
            <input
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
            <button className={styles.loginButton} type="submit">
              Login
            </button>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Login;
