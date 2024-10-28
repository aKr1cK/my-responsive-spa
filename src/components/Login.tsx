import { useState } from 'react';
import { Form, Button, Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 77vh;
    background: radial-gradient(#0d6efd, transparent);
    .card{
      width: 450px;
    }
  `;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    // <Container className="align-middle h-100 bg-primary">
    //   <Row>
    //     <Col xs={0} sm={2} lg={4}></Col>
    //     <Col xs={12} sm={8} lg={4}>

    //     </Col>
    //     <Col xs={0} sm={2} lg={4}></Col>
    //   </Row>
    // </Container>
    <Wrapper>
      <Card className="bg-dark text-white">
        <Card.Header>
          Login
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit} className="mb-3">
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Wrapper>
  );
};

export default Login;
