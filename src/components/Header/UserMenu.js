import { useDispatch } from 'react-redux';

import { authOperations } from '../../redux/auth';
import { useAuth } from 'hooks';

import { BlockUser, ButtonLogOut } from './UserMenu.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <BlockUser>
      <span>👌 You are welcome, {user.email}</span>
      <ButtonLogOut
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Exit
      </ButtonLogOut>
    </BlockUser>
  );
}
