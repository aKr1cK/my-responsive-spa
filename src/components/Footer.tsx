// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3 mt-auto">
    <Container>
      <p>My SPA &copy; {new Date().getFullYear()}</p>
    </Container>
  </footer>
);

export default Footer;
