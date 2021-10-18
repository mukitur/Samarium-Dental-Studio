import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Contact from './Pages/Home/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import Appoinments from './Pages/Home/Appoinments/Appoinments';
import Doctors from './Pages/Home/Doctors/Doctors';
import Services from './Pages/Home/Services/Services';
import DetailService from './Pages/Home/Home/DetailService/DetailService';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path = "/services">
            <Services></Services>
          </Route>
          <Route path='/detailservice/:serviceId'>
              <DetailService></DetailService>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/appoinments">
              <Appoinments></Appoinments>
          </Route>
          <Route path="/doctors">
              <Doctors></Doctors>
          </Route>
          <Route path ="/login">
              <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
