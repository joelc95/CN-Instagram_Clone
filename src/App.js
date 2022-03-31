import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login'
import { Home } from './pages/home';
import { Profile } from './pages/profile';
import { tokenLogin } from './utils';
import './App.css';


const App = () => {
  // This is destructuring the return value of the useState function
  const [user, setUser] = useState();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login user={user} setUser={setUser}/>}/>
        <Route path='/home' element={<Home user={user} setUser={setUser}/>}/>
        <Route path='/user' element={<Profile user={user} setUser={setUser}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
