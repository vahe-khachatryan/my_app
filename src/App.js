import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Navbar />
    </div>
  );
}

export default App;
