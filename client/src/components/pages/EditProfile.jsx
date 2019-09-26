import React from 'react'
import { Link } from 'react-router-dom'

export default function EditProfile() {
  return (
    <div>
      <h2> Edit your personal details </h2>

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
          <Link to="/profile">
            <button> Save </button>
          </Link>
        </div>
      </form>
    </div>
  )
}
