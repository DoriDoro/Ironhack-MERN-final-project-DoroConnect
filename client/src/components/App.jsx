import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainNavbar from './MainNavbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Secret from './pages/Secret'
import VIN from './adminPages/VIN'
import AddVIN from './adminPages/AddVIN'
import Profile from './pages/Profile'

export default function App() {
  return (
    <div>
      <MainNavbar />

      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/secret" component={Secret} />
          <Route path="/profile" component={Profile} />

          <Route path="/VIN" component={VIN} />
          <Route path="/add-vin" component={AddVIN} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    </div>
  )
}
