import './App.css';
import { Route,Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Card4 from './components/Card4';
import Cart from './components/Cart';
import Vegetables from './components/Vegetables';
import Fruits from './components/Fruits';
import DryFruits from './components/DryFruits';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div>
        <Nav />
        </div>
        <div>
          <Switch>
          <Route path="/Card4/:name/:price" exact component = {Card4} />
          <Route path="/Cart/:name/:price" exact component = {Cart} /> 
          <Route path="/Cart" exact component = {Cart} /> 
          <Route path="/Vegetables" exact component = {Vegetables} /> 
          <Route path="/Fruits" exact component = {Fruits} /> 
          <Route path="/DryFruits" exact component = {DryFruits} /> 
          <Route path="/Login" exact component = {Login} />  
          <Route path="/SignUp" exact component = {SignUp} />
          <Route path="/" exact component = {Home} />  
        </Switch> 
        </div> 
        <br></br>
        <div>
        <Footer />
        </div>
        <footer class="page-footer font-small">
        <div class="footer-copyright text-center py-3 mb-3">
          © 2019 Copyrights Resevered :
          <a id="text" href="#">
             AllSeasons.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
