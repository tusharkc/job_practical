import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserRegistration = () => {
  const formInitialState = {
    id: 1,
    fullName: "",
    email: "",
    password: "",
    isAdmin: false,
  };
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState(formInitialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formValues));
    navigate("/login");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        <input
          onChange={(e) => {
            setFormValues({ ...formValues, fullName: e.target.value });
          }}
          required
          id="fullName"
          name="fullName"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => {
            setFormValues({ ...formValues, email: e.target.value });
          }}
          required
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => {
            setFormValues({ ...formValues, password: e.target.value });
          }}
          required
          type={"password"}
          id="password"
          name="password"
        />
        <input
          onChange={() => {
            setFormValues(
              !formValues.isAdmin && { ...formValues, isAdmin: true }
            );
          }}
          type="checkbox"
          id="isAdmin"
          name="isAdmin"
          value={formValues.isAdmin}
        />
        Are you admin?
        <input type={"submit"} />
      </form>
    </>
  );
};

export default UserRegistration;
