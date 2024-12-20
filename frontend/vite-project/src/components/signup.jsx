import { useState } from "react";

let Signup = () => {
  let [name, setName] = useState("");
  let [userName, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  async function HandleSubmit(e) {
    e.preventDefault();

    console.log("Form Data:", { name, userName, email, password });

    try {
      const response = await fetch(
        "https://login-signup-ndpt.onrender.com/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, userName, email, password }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert("Success: " + (data.message || "User registered successfully"));

        // Clear form inputs
        setName("");
        setUsername("");
        setEmail("");
        setPassword("");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to register");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Error: " + error.message);
    }
  }

  return (
    <div className="container">
      <form onSubmit={HandleSubmit}>
        <div className="login">
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            type="text"
            required
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <label htmlFor="username">Username</label>
          <br />
          <input
            id="username"
            type="text"
            required
            placeholder="Username"
            value={userName}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />

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
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
