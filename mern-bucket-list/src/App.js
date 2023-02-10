import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import Intro from './components/intro';
import './App.css';

function App() {
 
  return (
   <div>
    <Intro></Intro>
    <Home></Home>
   </div>
  );
}

export default App;
