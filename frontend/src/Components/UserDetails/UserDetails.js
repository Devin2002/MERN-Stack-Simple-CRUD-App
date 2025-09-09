import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = "http://localhost:5000/user";

const fetchHeader = async () => {
  return await axios.get(URL).then((response) => response.data);
};
// This function fetches user data from the backend API
function UserDetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => {// React hook to run code on component mount
    // Load users when component mounts
    loadUsers();
  }, []);
  // ✅ Fetch users from backend
  const loadUsers = () => {
    fetchHeader()
      .then((data) => {
        setUsers(data.Users || data.users || []);
      })
      .catch((err) => {
        console.error("Error fetching users:", err.message);
      });
  };

  // ✅ Delete user
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      loadUsers(); // refresh list
    } catch (err) {
      console.error("Error deleting user:", err.message);
    }
  };

  // ✅ Update user (simple inline prompt version)
  const handleUpdate = async (user) => {
    const name = prompt("Enter new name", user.name);
    const gmail = prompt("Enter new email", user.gmail);
    const age = prompt("Enter new age", user.age);
    const address = prompt("Enter new address", user.address);

    // Validate inputs
    if (name && gmail && age && address) {
      try {
        await axios.put(`${URL}/${user._id}`, {
          name,
          gmail,
          age,
          address,
        });
        loadUsers(); // refresh list
      } catch (err) {
        console.error("Error updating user:", err.message);
      }
    }
  };

  // Render user details
  return (
    <div>
      <h2>User Details Page</h2>
      <div>
        {users && users.length > 0 ? (
          users.map((user) => (
            <div
              key={user._id}
              style={{
                border: "1px solid gray",
                margin: "10px",
                padding: "10px",
              }}
            >
              <h3>{user.name}</h3>
              <p><b>Email:</b> {user.gmail}</p>
              <p><b>Age:</b> {user.age}</p>
              <p><b>Address:</b> {user.address}</p>
              <button onClick={() => handleUpdate(user)}>Update</button>
              <button onClick={() => handleDelete(user._id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}

export default UserDetails;
