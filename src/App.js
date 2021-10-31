import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Header from './Containers/Header'
import ProductDetail from './Containers/ProductDetail'
import ProductListing from './Containers/ProductListing'
const App = () => {
  return (
    <div>
     <Router>
     <Header/>
     <Switch>
     <Route path="/" exact component={ProductListing}/>
     <Route path="/product/:productId" exact component={ProductDetail}/>
     <Route>404 Not Found</Route>
     </Switch>
     </Router>
    </div>
  )
}

export default App


