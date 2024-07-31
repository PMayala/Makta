import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useState } from "react";
import { register } from "../../services/users";
import { useNavigate } from "react-router-dom";

export default function RegisterModule() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    schoolname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");

  function handleChange(event) {
    const { value, name } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    register(user)
      .then(() => {
        setNotification("Registration successful! You can now log in.");
        setError(""); // Clear any previous errors
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Redirect after 2 seconds to allow users to see the notification
      })
      .catch((err) => {
        setError("Registration failed. Please check your details and try again.");
        setNotification(""); // Clear any previous notifications
        console.log(err); // Optional: log error for debugging purposes
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <Input
        placeholder="Full Name"
        id="name"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <Input
        placeholder="Enter the name of school"
        id="schoolName"
        name="schoolname"
        value={user.schoolname}
        onChange={handleChange}
      />
      <Input
        placeholder="Enter email"
        id="email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />
      <Input
        placeholder="Enter Password"
        id="password"
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      {notification && <div className="text-green-500 text-sm">{notification}</div>}
      <Button className="bg-green-500 w-full rounded-md" title="Register" />
    </form>
  );
}
