import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import { routes } from 'routes/routes';

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на redirectTo
 */

export default function PrivateRoute({
  component: Component,
  redirectTo = routes.HOME.path,
}) {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
