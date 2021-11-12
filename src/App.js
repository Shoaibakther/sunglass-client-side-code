import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Register from './Components/Login/Register/Register';
import Header from './Components/Home/Home/Header/Header';
import Dashboard from './Components/DashBoard/DashBoard/DashBoard';
import AddProducts from './Components/DashBoard/AddProducts/AddProducts';
import MakeAdmin from './Components/DashBoard/MakeAdmin/MakeAdmin';
import Explore from './Components/Explore/Explore';
import Purchase from './Components/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/addProducts">
              <AddProducts></AddProducts>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/purchase">
              <Purchase></Purchase>
            </Route>
            <Route>
              <MakeAdmin></MakeAdmin>
            </Route>
      </Switch>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
