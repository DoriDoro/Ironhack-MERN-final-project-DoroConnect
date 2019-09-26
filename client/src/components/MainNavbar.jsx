import React from 'react'
import api from '../api'
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
          <div className="MainNavbar__logo">
            <h3> DoroConnect </h3>
            <p> Innovation that excites </p>
          </div>
        </NavLink>
      </div>
    </nav>
  )
}

export default withRouter(MainNavbar)
