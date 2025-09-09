import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {// This component allows users to add a new user to the system
  const history = useNavigate();
  const [input, setInputs] = useState({
    name: "",
    gmail: "",
    age: "",
    address: "",
  });
// This state holds the input values for the form fields
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
// This function updates the input state when the user types in the form fields
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/userdetails"));
  };

  // This function sends a POST request to the backend to add a new user
  const sendRequest = async () => {
    return await axios.post("http://localhost:5000/user", {
      name: input.name,
      gmail: input.gmail,
      age: input.age,
      address: input.address,
    });
  };
// This function handles the form submission and sends the input data to the backend
  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br />
        <input type="text" name="name" onChange={handleChange} value={input.name} required />
        <br /><br />

        <label>Email</label><br />
        <input type="email" name="gmail" onChange={handleChange} value={input.gmail} required />
        <br /><br />

        <label>Age</label><br />
        <input type="number" name="age" onChange={handleChange} value={input.age} required />
        <br /><br />

        <label>Address</label><br />
        <input type="text" name="address" onChange={handleChange} value={input.address} required />
        <br /><br />

        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
