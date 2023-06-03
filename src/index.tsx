import React from 'react';
import ReactDOM from 'react-dom/client';

import { unstable_HistoryRouter as HistoryRouter, Routes, Route, Navigate } from 'react-router-dom'

import { createBrowserHistory } from 'history'
import HomeTemplate from './Templates/HomeTemplate';
import Home from './Pages/Home/Home';
import Detail from './Pages/Detail/Detail';
import Search from 'antd/es/transfer/search';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Cart from './Pages/Cart/Cart';
import Profile from './Pages/Profile/Profile';
//Setup redux
import { Provider } from 'react-redux'
import { store } from './Redux/configStore';
import Loading from './Components/Loading/Loading';
import ResponsiveItem from './Templates/ResponsiveItem';
import HomeMobile from './Pages/Home/HomeMobile';
import AdminTemplate from './Templates/AdminTemplate';
import DashBoard from './Pages/Admin/DashBoard/DashBoard';
import LoginAdmin from './Pages/Admin/LoginAdmin/LoginAdmin';
import UserManagement from './Pages/Admin/UserManagement/UserManagement';


export const history: any = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Loading></Loading>
    <HistoryRouter history={history}>

      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<ResponsiveItem component={Home} mobileComponent={HomeMobile} />}></Route>
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

        <Route path='admin' element={<AdminTemplate />}>
          <Route index element={<DashBoard />}></Route>
          <Route path="login" element={<LoginAdmin />}></Route>
          <Route path="users" element={<UserManagement />}></Route>


          <Route path="*" element={<Navigate to="/admin" />} ></Route>
        </Route>
      </Routes>


    </HistoryRouter>
  </Provider>
);

/*
  type React
  <div></div>: JSX.element
  function (props) => jsx : React.FC

*/