import React, { useState } from 'react'
import api from '../../api'
import { Link } from 'react-router-dom'

export default function EditProfile(props) {
  const user = JSON.parse(localStorage.getItem('user'))
  const [editProfile, setEditProfile] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
    address: user.address,
  })

  function handleChange(e) {
    setEditProfile({
      ...editProfile,
      [e.target.name]: e.target.value,
    })
  }

  function handleClick(e) {
    e.preventDefault()

    let editData = {
      firstName: editProfile.firstName,
      lastName: editProfile.lastName,
      email: editProfile.email,
      phone: editProfile.phone,
      address: editProfile.address,
    }
    api
      .editProfile(editData)
      .then(result => {
        console.log('SUCCESS!')
        props.history.push('/profile') // Redirect to the another page
      })
      .catch(err => setEditProfile({ ...editProfile, message: err.toString() }))
  }

  return (
    <div>
      <h2> Edit your personal details </h2>

      {/*<pre> {JSON.stringify(editProfile, null, 2)} </pre>*/}

      <form className="Profile__form-ProfileDetails form">
        <label> First Name: </label>
        <input
          type="text"
          name="firstName"
          value={editProfile.firstName}
          onChange={handleChange}
        />
        <label> Last Name: </label>
        <input
          type="text"
          name="lastName"
          value={editProfile.lastName}
          onChange={handleChange}
        />
        <label> Email: </label>
        <input
          type="email"
          name="email"
          value={editProfile.email}
          onChange={handleChange}
          disabled
        />
        <label> Phone: </label>
        <input
          type="phone"
          name="phone"
          value={editProfile.phone}
          onChange={handleChange}
        />
        <label> Address: </label>
        <input
          type="text"
          name="address"
          value={editProfile.address}
          onChange={handleChange}
        />

        <div className="form-div__btn-container form-div__btn-container-add-margin">
          <div className="form-div__btn btn-margin">
            <button onClick={e => handleClick(e)}> Save </button>
          </div>
          <div className="form-div__btn">
            <Link to="/profile">
              <button> Back to Profile </button>
            </Link>
          </div>
        </div>
      </form>
      {editProfile.message && (
        <div className="info info-danger">{editProfile.message}</div>
      )}
    </div>
  )
}
