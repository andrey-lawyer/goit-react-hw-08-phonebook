import React from 'react';
import { Link } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <Link to="/register">Sign up</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}
