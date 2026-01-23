import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import Login from './pages/Login'
import Register from './pages/Register';
import LandingPage from './pages/Landing'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Dashboard from './pages/Dashboard.jsx'


function App() {
  const [page, setPage] = useState("landing");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <div>
      {page === "landing" && <LandingPage onNavigate= {setPage} />}
      {page === "home" && <Home />}
      {page === "about" && <About />}
      {page === "contact" && <Contact />}
      {page === "dashboard" && <Dashboard />}
      {page === "register" && <Register onRegisterSuccesful={() => 
        setPage("login")} />} 
      {page === "login" && <Login onLogin={() => {
        setIsLoggedIn(true);
        setPage("dashboard");
      }} />}
    </div>
  );
}

export default App;
