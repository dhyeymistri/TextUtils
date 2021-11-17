// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'
import React, { useState } from 'react'


function App() {
  const [mode, setmode] = useState('light')
  const toggleMode = () =>{
    if(mode === "light"){
      setmode("dark")
      document.body.style.backgroundColor='black'
    }
    else{
      setmode("light")
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
      <TextArea heading="Enter your text below" mode={mode}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
