import React, { useState } from 'react'
import api from '../../api'

export default function Signup(props) {
  const [state, setState] = useState({
    VIN: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    message: null,
  })

  function handleInputChange(event) {
    // console.log('here')
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  function handleClick(e) {
    e.preventDefault()
    let data = {
      VIN: state.VIN,
      firstName: state.firstName,
      lastName: state.lastName,
      email: state.email,
      password: state.password,
    }
    api
      .signup(data)
      .then(result => {
        console.log('SUCCESS!')
        props.history.push('/profile') // Redirect to the another page
      })
      .catch(err => setState({ message: err.toString() }))
  }
  return (
    <div className="Signup">
      <h2>Signup</h2>
      <p>
        Please enter your Vehicle Identification Number (VIN). This
        identification number has 17 characters, which you will find on the
        vehicle registration document and on the vehicle itself, so that you can
        create your personal account. You can only register one NISSAN vehicle
        when creating your account.
      </p>
      <form className="form">
        <label> VIN: </label>
        <input
          type="text"
          value={state.VIN}
          name="VIN"
          onChange={handleInputChange}
        />{' '}
        <br />
        <label> First Name: </label>
        <input
          type="text"
          value={state.firstName}
          name="firstName"
          onChange={handleInputChange}
        />{' '}
        <br />
        <label> Last Name: </label>
        <input
          type="text"
          value={state.lastName}
          name="lastName"
          onChange={handleInputChange}
        />{' '}
        <br />
        <label> Email: </label>
        <input
          type="text"
          value={state.email}
          name="email"
          onChange={handleInputChange}
        />{' '}
        <br />
        <label> Password: </label>
        <input
          type="password"
          value={state.password}
          name="password"
          onChange={handleInputChange}
        />
        <div className="form-div__btn">
          <button onClick={e => handleClick(e)}> Signup </button>
        </div>
      </form>
      {state.message && <div className="info info-danger">{state.message}</div>}
    </div>
  )
}
