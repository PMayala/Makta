import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useState, useContext } from "react";
import { signIn } from "../../services/users";
import { MainContext } from "../../context/AppContext";

export default function LoginMolecule() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { setUser: setAppUser } = useContext(MainContext);

  function handleChange(event) {
    const { value, name } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(user)
      .then((res) => {
        localStorage.setItem("accessToken", res.data.token);
        setAppUser(res.data);
        setError(""); // Clear any previous errors
      })
      .catch((err) => {
        setError("Invalid email or password. Please try again.");
        console.log(err); // Optional: log error for debugging purposes
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
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
      <Button className="bg-green-500 w-full rounded-md" title="Login" />
    </form>
  );
}
