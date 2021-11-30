import './App.css';
import About from './components/About';
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = 'black'
      showAlert("Dark Mode has been enabled!", "success")
    }
    else {
      setmode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled!", "success")
    }
  }
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <div className="container my-3">
            <Routes>
              <Route path="/about" element={<About/>}/>
              <Route path="/" element={<TextArea showAlert={showAlert} heading="Enter your text below" mode={mode} />}/>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
