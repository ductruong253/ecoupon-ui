import {
  Form,
  Link,
  useActionData,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import classes from "./AuthForm.module.css";
function AuthForm() {
  const data = useActionData();
  const navigation = useNavigate();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form method="post" className={classes.form}>
      <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      {data && data.message && <p>{data.message}</p>}
      {!isLogin ? (
        <>
          <p>
            <label htmlFor="fullname">Full name</label>
            <input id="fullname" type="text" name="fullname" required />
          </p>
          <p>
            <label htmlFor="phoneNumber">Phone number</label>
            <input id="phoneNumber" type="text" name="phoneNumber" required />
          </p>
        </>
      ) : (
        <></>
      )}
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </p>
      <p>
        <label htmlFor="image">Password</label>
        <input id="password" type="password" name="password" required />
      </p>
      <div className={classes.actions}>
        <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
          {isLogin
            ? "I don't have an account! Sign Up"
            : "Already have an account? Login"}
        </Link>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : isLogin ? "Login" : "Sign Up"}
        </button>
      </div>
    </Form>
  );
}

export default AuthForm;
