import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import { data } from './data/price';
import WishList from './components/WishList';
function App() {
  return (
    <div className="App font-body bg-gray-100">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart data={data} />
          </Route>
          <Route path="/wishlist">
            <WishList data={data} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
