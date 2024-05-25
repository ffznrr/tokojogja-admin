import React from 'react';
import Register from './page/register';
import ReactDOM from 'react-dom/client';
import Home from './page/home';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store/store';

import reportWebVitals from './reportWebVitals';
import FormLogin from './page/login';
import Profil from './page/profil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path:"/login",
    element: <FormLogin />
  },
  {
    path:"/register",
    element: <Register />
  },
  {
    path:"/home",
    element: <Home />
  },
  {
    path:"/profil",
    element: <Profil/>
  }

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
