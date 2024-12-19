import { useState } from "react";
import axios from "axios";

const Loginpage = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  async function HandleSubmit(e) {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const response = await axios.post(
        "https://login-signup-ndpt.onrender.com/user/login",
        { email, password }
      );

      if (response.status === 200) {
        alert("Login successful: " + (response.data.message || "Welcome!"));
        setEmail("");
        setPassword("");
      } else {
        throw new Error("Unexpected response from server");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error: " + (error.response?.data?.message || error.message));
    }
  }

  return (
    <div className="container">
      <form onSubmit={HandleSubmit}>
        <div className="login">
          <label htmlFor="email">Email</label>
          <br />
          <input
            id="email"
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            id="password"
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Loginpage;
