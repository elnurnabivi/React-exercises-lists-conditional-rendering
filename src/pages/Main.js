import { useState } from "react";

function Main() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function checkingLogin() {
    if (!username == "" && !password == "") {
      alert("Hello, you are redirecting to Landing page");
    } else alert("Invalid username or password");
  }
  return (
    <div className="Main">
      <label>Username</label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={checkingLogin}>Click</button>
    </div>
  );
}

export default Main;
