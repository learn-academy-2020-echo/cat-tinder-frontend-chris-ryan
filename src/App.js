import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import CatEdit from './pages/CatEdit'
import CatIndex from './pages/CatIndex'
import CatNew from './pages/CatNew'
import CatShow from './pages/CatShow'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import catz from './mockCats.js'

import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: catz
    }
  }

  createCat = (newcat) => {
    console.log(newcat);
  }

  updateCat = (cat, id) => {
    console.log("cat:", cat)
    console.log("id:", id)
  }
  
  render(){
        return(
            <Router>
              <Header />

              <Switch>
                <Route exact path='/' component={ Home } />
                
                <Route 
                  path='/catindex'
                  render={ (props) => <CatIndex cats={ this.state.cats } />}
                  />
               
                <Route 
                  path='/catshow/:id' 
                  render={ (props) => {
                      const id = props.match.params.id
                      console.log(props.match.params.id)
                      
                      let cat = this.state.cats.find(cat => cat.id === parseInt(id))
                      
                      return <CatShow cat={ cat } />
                  }}
                />

                <Route 
                path='/catnew'
                render={ (props) => <CatNew createCat={ this.createCat } /> } />

                <Route 
                  exact path={"/catedit/:id"} 
                  render={ (props) => {
                    let id = props.match.params.id
                    let cat = this.state.cats.find(cat => cat.id === parseInt(id))
                    return(
                      <CatEdit
                        updateCat={ this.updateCat }
                        cat={ cat }
                      />
                    )
                  }} 
                  />
                
                <Route component={ NotFound } />

              </Switch>

              <Footer />
            </Router>
        )
    }
}


export default App
