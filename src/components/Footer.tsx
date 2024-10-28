// src/components/Footer.js
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3 mt-auto">
    <Container>
      <p>Copyright © {new Date().getFullYear()} WorldGoCargo. Built with Docusaurus.</p>
    </Container>
  </footer>
);

export default Footer;
