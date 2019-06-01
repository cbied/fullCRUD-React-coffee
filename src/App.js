import React from 'react';
import './App.css';
import { HashRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import routes from "./routes";


function App() {
  return (
    <Router>
      <div>
        <Header />
        { routes }
      </div>
    </Router>
  );
}

export default App;
