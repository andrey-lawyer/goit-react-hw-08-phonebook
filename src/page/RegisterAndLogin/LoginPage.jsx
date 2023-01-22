import { useEffect, useState } from 'react';
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
import { notify } from 'services/phoneBookApi';
import { MyThreeDots } from 'components/Loaders/MyThreeDots';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, loading } = useAuth();

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
      {loading && <MyThreeDots />}
    </main>
  );
}
