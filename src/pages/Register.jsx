import React, { useState } from 'react';

function Register({onRegisterSuccesful}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsername("");
    setEmail("");
    setPassword("");

    setTimeout(() => {
      onRegisterSuccesful();
    },2000);

    if (
      username === "Anirudh" &&
      password === "935688" &&
      email === "anirudhakoskar@gmail.com"
    ) {
      alert("Registration Successful! ✔️");
      setError("");
    } else {
      setError("Wrong info!!");
    }
  };

  return (
    <>
      <div className="container">
        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            style={{ fontSize: 'medium' }}
            placeholder="Enter your username"
            className="input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br /><br />

          <input
            type="email"
            style={{ fontSize: 'medium' }}
            placeholder="Enter your email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br /><br />

          <input
            type="password"
            style={{ fontSize: 'medium' }}
            placeholder="Enter your password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br /><br />

          <button className="btn" type="submit">Register</button>
        </form>

        {error && <p style={{ color: 'red', fontSize: 'medium' }}>{error}</p>}
      </div>
    </>
  );
}

export default Register;
