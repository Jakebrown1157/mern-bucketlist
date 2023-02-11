
import Home from './components/Home'
import Intro from './components/Intro.jsx';
import Create from './components/create';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
 
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Intro />} ></Route>
        <Route path='/Home' element={<Home />} ></Route>
        <Route path='/Create' element={<Create />} ></Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
