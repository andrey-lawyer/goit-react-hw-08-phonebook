import React from 'react';

import { useAuth } from 'hooks';
import { routes } from 'routes/routes';
import { Link } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const { HOME, CONTACTS } = routes;

  return (
    <nav>
      <Link to={HOME.path}>Home</Link>
      {isLoggedIn && <Link to={CONTACTS.absolutePath}>Contacts</Link>}
    </nav>
  );
};

export default Navigation;
