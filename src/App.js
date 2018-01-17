import React from 'react'
import {/*HashRouter*/BrowserRouter as Router,Route,NavLink,Switch,Redirect} from 'react-router-dom'
import About from './component/About/About'
import Home from './component/Home/Home'
import Work from './component/Work/Work'
import Help from './component/Help/Help'
import './app.css'
const Error =()=><div>404</div>

class App extends React.Component {
  render () {
    const style={
      fontWeight:'bold',
      color:'red'
    }
  return(
    <Router>
      <div>
        <Help/>
        <ul>
          <li><NavLink activeStyle={style} exact to='/'>Home</NavLink></li>
          <li><NavLink activeStyle={style} to={{
                pathname:'/about',
                state:{a:1}
            }}>About</NavLink></li>
          <li><NavLink activeStyle={style} to='/newwork'>Work</NavLink></li>
        </ul>
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/newwork' component={Work}/>
        <Route path='/404' component={Error}/>
        <Redirect from='/work' to='/newwork'/>
        <Redirect from='/*' to='/404'/>
        </Switch>
      </div>
    </Router>
  )
  }
}

export default App;
