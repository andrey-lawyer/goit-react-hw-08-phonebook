import React from 'react';
import { Link } from './AuthNav.styled';
import { routes } from 'routes/routes';

export default function AuthNav() {
  const { REGISTER, LOGIN } = routes;
  return (
    <div>
      <Link to={REGISTER.absolutePath}>Sign up</Link>
      <Link to={LOGIN.absolutePath}>Login</Link>
    </div>
  );
}
