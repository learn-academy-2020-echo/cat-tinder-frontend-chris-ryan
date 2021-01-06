import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import CatEdit from './pages/CatEdit'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import CatShow from './pages/CatShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

class App extends Component {
    render(){
        return(
            <Router>
              <Header />

              <Switch>
                <Route exact path='/' component={ Home } />
                <Route path='/catindex' component={ CatIndex } />
                <Route path='/catshow' component={ CatShow } />
                <Route path='/catnew' component={ CatNew } />
                <Route path='/catedit' component={ CatEdit } />
                <Route component={ NotFound } />
              </Switch>

              <Footer />
            </Router>
        )
    }
}


export default App
