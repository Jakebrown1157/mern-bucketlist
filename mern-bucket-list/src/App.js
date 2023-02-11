
import Home from './components/home';
import Intro from './components/intro.jsx';
import Create from './components/create.jsx';
import Edit from './components/edit.jsx';
import Delete from './components/delete.jsx';

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
        <Route path='/Edit' element={<Edit />} ></Route>
        <Route path='/Delete' element={<Delete />} ></Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
