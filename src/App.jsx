import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import Login from './pages/Login'
import Register from './pages/Register';

function App() {
  const [currentPage, setCurrentPage] = useState('register')
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [isRegister, setIsRegister] = useState(false);



  return (
   <div>
    {currentPage === "register" && <Register />}
    {currentPage === "login" && (isLoggedIn ? (
      <h1>Welcome, Admin</h1>
    ) : (
      <Login onLogin={() => setIsLoggedIn(true)} />
    ))}
   </div>
  )
}

export default App;
