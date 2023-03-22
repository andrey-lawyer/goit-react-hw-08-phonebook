import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import {
  Registration,
  Form,
  TitleH1,
  Button,
  Input,
  Label,
} from './LoginAndRegister.styled';
import { useAuth } from 'hooks';
import { toast } from 'react-toastify';
import { MyThreeDots } from 'components/Loaders/MyThreeDots';

export default function RegisterPage() {
  const dispatch = useDispatch();
  // const [name, setName] = useState('');
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
      // case 'name':
      //   return setName(value);
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
    dispatch(
      authOperations.register({
        //  name,
        email,
        password,
      })
    );
    // setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <main>
      <Registration>
        <TitleH1>Enter your registration details, please</TitleH1>

        <Form onSubmit={handleSubmit} autoComplete="off">
          {/* <Label>
            Name
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Label> */}

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

          <Button type="submit">Create Account</Button>
        </Form>
      </Registration>
      {loading && <MyThreeDots />}
    </main>
  );
}
