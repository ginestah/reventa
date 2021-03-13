import React from "react";
import { signUp, signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getUsers } from "../../services/users";

const SignUp = (props) => {
  const history = useHistory();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      setUsers(users);
    };
    fetchUsers();
  }, []);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    wishlist: [],
    passwordConfirmation: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  const onSignUp = (event) => {
    event.preventDefault();
    const { setUser } = props;

    signUp(form)
      .then(() => signIn(form))
      .then((user) => setUser(user))
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          email: "",
          password: "",
          wishlist: [],
          passwordConfirmation: "",
          isError: true,
          errorMsg: "Sign Up Details Invalid",
        });
      });
  };
  const { email, username, password, passwordConfirmation } = form;

  const renderError = () => {
    if (form.isError) {
      return <p className="error-message">{form.errorMsg}</p>;
    }
  };

  const check = () => {
    if (
      users.some((x) => x.username === username) ||
      users.some((x) => x.email === email || password !== passwordConfirmation)
    ) {
      if (users.some((x) => x.username === username)) {
        return <p className="taken-message">That username is already taken</p>;
      } else if (users.some((x) => x.email === email)) {
        return (
          <>
            <p className="taken-message">Email is already in use</p>
            <br />
            <p className="taken-message">
              Please contact if you forgot your username
            </p>
          </>
        );
      } else if (password !== passwordConfirmation) {
        return (
          <p className="taken-message">Passwords must match to submit form</p>
        );
      }
    } else {
      return <button type="submit">Sign Up</button>;
    }
  };
  return (
    <Layout user={props.user}>
      <div className="form-container">
        <h3>Sign Up</h3>
        <form onSubmit={onSignUp}>
          <div className="signup-username">
            <label>Username</label>
            <input
              autoFocus
              required
              type="text"
              name="username"
              value={username}
              placeholder="Enter Username"
              onChange={handleChange}
            />
          </div>
          <div className="signup-email">
            <label>Email Address</label>
            <input
              required
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>
          <div className="signup-password">
            <label>Password</label>
            <input
              required
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="signup-confirm">
            <label>Confirm Password</label>
            <input
              required
              type="password"
              name="passwordConfirmation"
              value={passwordConfirmation}
              placeholder="Confirm Password"
              onChange={handleChange}
            />
          </div>
          {renderError()}
          {check()}
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
