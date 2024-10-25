// src/components/Home.js
import { AgGridReact } from 'ag-grid-react';
import React, { useState } from 'react';
import { Button, Card, Container, Nav } from 'react-bootstrap';
import { FaGreaterThan } from 'react-icons/fa';
import { IoMdAdd } from 'react-icons/io';

const Home = () => {
  const [activeTab, setActiveTab] = useState('Truck');
  const [rowData, setRowData] = useState([
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ]);
  const [colDefs, setColDefs]: any[] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "electric" }
  ]);
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
          <div className="text-start"><IoMdAdd size={30}  style={{ background: "#0d6efd" }}/></div>
          {activeTab == 'Truck' &&
          <div className="ag-theme-alpine-dark pt-2" style={{ height: 900 }}>
            <AgGridReact rowData={rowData} columnDefs={colDefs}/>
          </div>
          }
          {
            activeTab == 'Other' &&  <div>OTHER</div>
          }
        </Card.Body>
      </Card>
    </Container>
  )
};

export default Home;
