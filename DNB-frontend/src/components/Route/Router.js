import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ModulesSideBar from '../Modules-side-bar/ModulesSideBar';
import App from '../../App'
import Admin from '../Admin/Admin';
import Login from '../Login/Login';
import Register from '../Register/Register';
import ForgotPassword from '../Forgot/ForgotPassword';


const Router = () => (
 <BrowserRouter>
   <Switch>
    <Route exact path='/' component={App} />
    <Route exact path='/admin/login' component={Login} />
    <Route exact path='/admin/register' component={Register} />
    <Route exact path='/admin/reset' component={ForgotPassword} />
    /admin
    <Route exact path='/admin' component={Admin} />
   </Switch>
 </BrowserRouter>

 );

export default Router;
