import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainNavbar from './MainNavbar'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Secret from './pages/Secret'
import Profile from './pages/Profile'
import VehicleDetails from './pages/VehicleDetails'
import AddVehicle from './pages/AddVehicle'
import EditProfile from './pages/EditProfile'
import ConnectedServices from './pages/ConnectedServices'

export default function App() {
  return (
    <div>
      <MainNavbar />

      <div className="App">
        <div className="App__container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/secret" component={Secret} />
            <Route path="/profile" component={Profile} />
            <Route path="/edit-profile/:id" component={EditProfile} />
            <Route path="/vehicle-details/:VIN" component={VehicleDetails} />
            <Route path="/add-vehicle" component={AddVehicle} />
            <Route path="/services/:VIN" component={ConnectedServices} />

            <Route render={() => <h2>404</h2>} />
          </Switch>
        </div>
      </div>
    </div>
  )
}
