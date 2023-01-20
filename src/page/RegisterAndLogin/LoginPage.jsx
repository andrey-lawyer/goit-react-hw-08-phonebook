import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { authOperations } from '../../redux/auth';
import { useAuth } from 'hooks';

import {
  Registration,
  Form,
  TitleH1,
  Button,
  Input,
  Label,
} from './LoginAndRegister.styled';
import { ThreeDots } from 'react-loader-spinner';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { error, loading } = useAuth();

  const notify = error =>
    toast(`${error}! Something went wrong...`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  useEffect(() => {
    if (!error) return;
    notify(error);
  }, [error]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <main>
      <Registration>
        <TitleH1>User Login</TitleH1>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Label>
            E-mail
            <Input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Label>

          <Label>
            Password
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Label>

          <Button type="submit">Log In</Button>
        </Form>
      </Registration>
      {loading && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      )}
    </main>
  );
}
