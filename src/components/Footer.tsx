// src/components/Footer.js
import { Container } from 'react-bootstrap';

const Footer = ({ theme }: any) => (
  <footer data-bs-theme={theme} className={theme == 'dark' ? "bg-dark text-white text-center py-3" : "bg-white text-black text-center py-3"}>
    <Container>
      <span>Copyright © {new Date().getFullYear()} WorldGoCargo ™</span>
    </Container>
  </footer>
);

export default Footer;
