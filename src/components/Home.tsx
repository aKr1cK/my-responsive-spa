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
    <Container className="text-center">
      <div className="text-start">Home&nbsp;&nbsp;<FaGreaterThan />&nbsp;&nbsp;{activeTab}&nbsp;&nbsp;{/*<FaGreaterThan />&nbsp;&nbsp;New Shipment*/}</div>
      <Card className="text-center bg-dark text-white">
        <Card.Header>
          <Nav variant="pills" defaultActiveKey="Truck">
            <Nav.Item>
              <Nav.Link active={activeTab == 'Truck'} onClick={() => setActiveTab('Truck')}>Truck</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link active={activeTab == 'Other'} onClick={() => setActiveTab('Other')}>Other</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          {activeTab == 'Truck' && <Truck/>}
          {activeTab == 'Other' &&  <div>OTHER</div>}
        </Card.Body>
      </Card>
    </Container>
  )
};

export default Home;
