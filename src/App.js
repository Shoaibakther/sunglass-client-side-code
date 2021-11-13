
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Dashboard from './Components/DashBoard/DashBoard/DashBoard';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import MyOrder from './Components/DashBoard/MyOrder/MyOrder';
import Review from './Components/DashBoard/Review/Review';
import MainLogin from './Components/Login/MainLogin/MainLogin';
import MainExplore from './Components/Explore/MainExplore/MainExplore';
import MainRegister from './Components/Login/Register/MainRegister/MainRegister';
import Pay from './Components/DashBoard/Pay/Pay';
import MainPurchase from './Components/Purchase/MainPurchase/MainPurchase';
import ManageOrders from './Components/DashBoard/ManageAllOrders/ManageOrders';
import ManageProducts from './Components/DashBoard/ManageProducts/ManageProducts';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <MainLogin></MainLogin>
            </Route>
            <Route path="/register">
            <MainRegister></MainRegister>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/explore">
              <MainExplore></MainExplore>
            </Route>
            <PrivateRoute path="/pay">
              <Pay></Pay>
           </PrivateRoute>
            <PrivateRoute path="/purchase/:serviceId">
              <MainPurchase></MainPurchase>
            </PrivateRoute>
            <Route path="/orders">
              <ManageOrders></ManageOrders>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
      </Switch>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
