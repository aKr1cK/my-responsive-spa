// src/components/Footer.js
import { Container } from 'react-bootstrap';

const Footer = ({ theme }: any) => (
  <footer data-bs-theme={theme} className="bg-dark text-white text-center py-3 mt-auto">
    <Container data-bs-theme={theme}>
      <p>Copyright © {new Date().getFullYear()} WorldGoCargo</p>
    </Container>
  </footer>
);

export default Footer;
