// src/App.js
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import Truck from './components/Truck';
import { useSelector } from 'react-redux';
import SideMenu from './components/SideMenu';


function App() {
  const { isAuthenticated } = useSelector((state: any) => state?.auth)
  const [theme, setTheme] = useState('dark');
  // Toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  return (
    <div className={`App ${theme}-theme`}>
      <Router>
        <NavbarComponent toggleTheme={toggleTheme} theme={theme} />
        <div className='mainDiv' style={!isAuthenticated ? { alignItems: 'center' } : {}}>
          {isAuthenticated && <SideMenu theme={theme} />}
          <div style={{flex: 1}} className='m-2'>
            <Routes>
              <Route path="/" element={<Login theme={theme} />} />
              <Route path="/home" element={isAuthenticated ? <Home /> : <Login theme={theme} />} />
              <Route path="/truck" element={isAuthenticated ? <Truck theme={theme} /> : <Login theme={theme} />} />
              <Route path="/about" element={isAuthenticated ? <About /> : <Login theme={theme} />} />
              <Route path="/login" element={<Login theme={theme} />} />
              <Route path="*" element={<Login theme={theme} />} />
            </Routes>
          </div>
        </div>
        <Footer theme={theme} />
      </Router>
    </div>
  );
}

export default App;
