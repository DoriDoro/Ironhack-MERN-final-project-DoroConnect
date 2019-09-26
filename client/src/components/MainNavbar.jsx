import React from 'react'
import api from '../api'
import logo from '../images/nissan-logo.png'
import { Link, NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

function MainNavbar(props) {
  function handleLogoutClick(e) {
    api.logout()
  }
  return (
    <nav className="MainNavbar">
      <div className="MainNavbar__fistDiv">
        {!api.isLoggedIn() && <NavLink to="/signup">Signup</NavLink>}
        {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
        {api.isLoggedIn() && (
          <Link to="/" onClick={handleLogoutClick}>
            Logout
          </Link>
        )}
      </div>

      <div className="MainNavbar__secondDiv">
        <NavLink to="/" exact>
          <img src={logo} className="MainNavbar__logo" alt="logo" />
        </NavLink>
      </div>
    </nav>
  )
}

export default withRouter(MainNavbar)
