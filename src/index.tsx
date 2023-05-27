import React from 'react';
import ReactDOM from 'react-dom/client';

import {unstable_HistoryRouter as HistoryRouter, Route, HistoryRouterProps, Routes, Navigate} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import HomeTemplate from './Templates/HomeTemplate';
import Home from './Pages/Home/Home';
import Detail from './Pages/Detail/Detail';
import Search from './Pages/Search/Search';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Cart from './Pages/Cart/Cart';
import Profile from './Pages/Profile/Profile';

export const history:any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HistoryRouter history={history}>
      <Routes>
          <Route path='' element={<HomeTemplate />}>
              <Route index element={<Home />}></Route>
              <Route path="detail">
                  <Route path=':id' element={<Detail />}></Route>
              </Route>
              <Route path="search" element={<Search />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="register" element={<Register />}></Route>
              <Route path="cart" element={<Cart />}></Route>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="*" element={<Navigate to="/" />}></Route>
          </Route>
      </Routes>
  </HistoryRouter>
);


/*
  type React
  <div></div>: JSX.element
  function (props) => jsx : React.FC
*/ 