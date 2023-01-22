import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import { routes } from 'routes/routes';
/**
 * - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
 * - В противном случае рендерит компонент
 */

export default function PublicRoute({
  restricted = false,
  redirectTo = routes.HOME.path,
  component: Component,
}) {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
