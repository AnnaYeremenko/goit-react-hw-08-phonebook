import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes} from ' react-router-dom';
import { Layout } from './Layout/Layout';
import { useAuth }from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestreictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('..pages/Register'));
const LoginPage = lazy(() => import('../page/Login'));
const ContactsPage = lazy(() => import('../page/Contacts'));


export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  
  return isRefreshing ? (
    <b>Refreshing user ...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
          />
        <Route 
        path="/login>"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
        }
        />
        <Route
        path="/contacts"
        element={
          <PrivateRoute redirectTo="/login" component={<ContatctsPage />}/>
        } 
        />
      </Route>
    </Routes>
  );
};
