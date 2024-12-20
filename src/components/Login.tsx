import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = ({theme}: any) => {
  const [isGlassLogin, setGlassLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email] = useState('');
  //background: radial-gradient(#0d6efd, transparent);
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .card{
      width: 450px;
    }
  `;

  const { register, handleSubmit } = useForm({
    defaultValues: {
      formEmail: "",
      formPassword: "",
    }
  });
  
  dispatch((logout()))// clear if old login
  
  const onSubmit = () => {
    dispatch(loginSuccess(email));
    setTimeout(() => {
      navigate('/truck', { replace: true });
    },500);
  };

  return (
    <Wrapper>
      <Card className={isGlassLogin? theme == 'dark' ? "cardOverride" : "cardOverride" : theme == 'dark' ? "bg-dark text-white cardOverride" : "bg-dark text-white cardOverride"}>
        <Card.Header  className='text-center' onDoubleClick={()=>setGlassLogin(!isGlassLogin)}>
          <h6>Sign In</h6>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)} className="mb-3">
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Please Enter email"
                {...register('formEmail', { required: true })}
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-4">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register('formPassword', { required: true })}
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
