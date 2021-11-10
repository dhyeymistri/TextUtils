// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextArea from './components/TextArea'

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
      <TextArea heading="Enter your text below" />
      </div>
    </>
  );
}

export default App;
