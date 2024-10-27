// src/components/Home.js
import { AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react';
import { Button, Card, Container, Nav } from 'react-bootstrap';
import { FaGreaterThan } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';
import Truck from './Truck';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Truck');
  return (
    <>
      <div>Welcome Home</div>
    </>
  )
};

export default Home;
