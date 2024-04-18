import React from "react";
import Sidebar from  "./components/sidebar.js";
import Navbar from "./components/navbar.js";

function App() {
  return (
    <div className="App flex h-screen">
      <Sidebar />
      <Navbar />
    </div>
  );
}

export default App;
