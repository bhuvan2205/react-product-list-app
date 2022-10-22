import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import Create from './Create';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import NotFound from './NotFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/products/:id">
              <ProductDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <Footer  />
      </div>
    </Router>
  );
}

export default App;
