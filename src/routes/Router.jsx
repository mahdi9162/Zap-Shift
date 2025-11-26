import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home/Home';
import Coverage from '../pages/Coverage/Coverage';
import AboutUs from '../pages/AboutUs/AboutUs';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Auth/Login/Login';
import Register from '../pages/Auth/Register/Register';
import Rider from '../pages/Rider/Rider';
import SendAParcel from '../pages/SendAParcel/SendAParcel';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/coverage',
        Component: Coverage,
        loader: () => fetch('/serviceCenter.json').then((res) => res.json()),
      },
      {
        path: '/rider',
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },
      {
        path: '/send-parcel',
        element: (
          <PrivateRoute>
            <SendAParcel></SendAParcel>
          </PrivateRoute>
        ),
        loader: () => fetch('/serviceCenter.json').then((res) => res.json()),
      },
      {
        path: '/about-us',
        Component: AboutUs,
      },
    ],
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
    ],
  },
]);
