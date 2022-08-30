import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const logInFormInitialValue = { email: "", password: "" };
  const [loginFormValues, setLoginFormValues] = useState(logInFormInitialValue);
  const [isError, setIsError] = useState(false);

  const localStorageValues = JSON.parse(localStorage.getItem("user")) || {};

  const emailFromLocalStorage = localStorageValues?.email;
  const passwordFromLocalStorage = localStorageValues?.password;
  const isAdmin = localStorageValues?.isAdmin;
  const id = localStorageValues?.id;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      emailFromLocalStorage === loginFormValues.email &&
      passwordFromLocalStorage === loginFormValues.password &&
      isAdmin
    ) {
      navigate("/user-listing");
    } else if (
      emailFromLocalStorage === loginFormValues.email &&
      passwordFromLocalStorage === loginFormValues.password
    ) {
      navigate(`/user/${id}/todos`);
    } else {
      setIsError(true);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        onChange={(e) => {
          setLoginFormValues({ ...loginFormValues, email: e.target.value });
        }}
        id="email"
        name="email"
        required
      />
      <label htmlFor="password">Password</label>
      <input
        onChange={(e) => {
          setLoginFormValues({ ...loginFormValues, password: e.target.value });
        }}
        id="password"
        type={"password"}
        name="password"
        required
      />
      <input type={"submit"} />

      {isError && <p>Entered Details are incorrect or user doesn't exists</p>}
    </form>
  );
};

export default UserLogin;
