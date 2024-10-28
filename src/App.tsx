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
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional Theme applied to the Data Grid
import Truck from './components/Truck';
import { useSelector } from 'react-redux';


function App() {
  //const dispatch = useDispatch();
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
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={isAuthenticated? <Home /> : <Login />} />
          <Route path="/truck" element={ isAuthenticated? <Truck /> : <Login />} />
          <Route path="/about" element={ isAuthenticated? <About /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
