import { Route, Routes } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Phones from "./components/Phones";
import EachPhone from "./components/EachPhone"
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
      <Route path='/' element = {<HomePage/>}/>
       
        <Route path='/phones' element = {<Phones/>}/>

        <Route path='/phones/:id' element = {<EachPhone/>}/>

      </Routes>
    </div>
  );
}

export default App;
