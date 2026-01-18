import React, { useState } from "react";
import { useEffect } from "react";

function Login({onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSumbite = (e) => {
    e.preventDefault();
    email == "ani@gmail.com" && password === "123456"
      ? onLogin()
      : setError("Invalid Password or email");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Login Page</h2>
      <form onSubmit={handleSumbite}>
        <input 
           type="email" 
           placeholder="Enter email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
           /> 
        <br />
        <br />
       <input 
           type="password" 
           placeholder="Enter password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           required
           /> 
        <br />
        <br />
        <button type="sumbit">Login</button>
      </form>
      {error && <p style={{color:'red'}}>{error}   </p>}
    </div>
  );
}

export default Login;
