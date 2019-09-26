import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../api'

export default function Profile() {
  //   const [userDetails, setUserDetails] = useState('')

  //   useEffect(() => {
  //     api.getUser().then(userFromApi => {
  //       setUserDetails(userFromApi)
  //     })
  //   }, [])

  return (
    <div className="Profile">
      <h2> Welcome to your profile </h2>

      <div className="Profile__div-container">
        <form className="Profile__form-ProfileDetails form">
          <label> First Name: </label>
          <input type="text" name="firstName" />

          <label> Last Name: </label>
          <input type="text" name="lastName" />

          <label> Email: </label>
          <input type="email" name="email" />

          <label> Password: </label>
          <input type="password" name="password" />

          <label> Phone: </label>
          <input type="number" name="phone" />

          <label> Address: </label>
          <input type="text" name="address" />

          <div className="form-div__btn">
            <Link to="/edit-profile">
              <button> Edit Profile </button>
            </Link>
          </div>
        </form>

        <form className="Profile__form-ProfileDetails form">
          <div className="form-div__btn">
            <Link to="/add-vehicle">
              <button> Add new Vehicle </button>
            </Link>
          </div>
          <label> Vehicle 1: </label>
          <input type="text" name="vin" />

          <div className="form-div__btn-container">
            <div className="form-div__btn btn-margin">
              <Link to="/services">
                <button> ConnectedServices </button>
              </Link>
            </div>
            <div className="form-div__btn">
              <Link to="/vehicle-details">
                <button> Vehicle Details </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
