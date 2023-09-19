// Add Login screen to app
import "./App.css";
import React from "react";
import Admin from "./pages/Admin";
import Main from "./pages/Main";
import UserData from "./pages/UserData";

function App() {
  return (
    <div>
      <Main />
      <Admin />
    </div>
  );
}

export default App;
